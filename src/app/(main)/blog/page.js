import Header from "@/components/header/Header";
import LoadingSkelet from "@/components/loadingSkelet";
import { Suspense } from "react";
import Posts from "./Posts";
import BlogFilterbar from "@/components/blog/BlogFilter";


export default function page() {
  return (
    <main className="container">
    <Header>
        <div>
          <h2 className="text-[20px] font-semibold">All Blog</h2>
          <span className="text-[14px] text-[#A2A1A8]">All Blog Posts</span>
        </div>
      </Header>      
      <div
        className="w-full rounded-[10px] p-5"
        style={{ border: "1px solid rgba(162, 161, 168, 0.2)" }}
      >                                      
      <BlogFilterbar addLink={'blog/create'}/>
      <div className="w-full text-[#A2A1A8] blog-card-table">
          <span>Title</span>
          <span>Created Date</span>          
          <span>Action</span>
        </div>
        <Suspense fallback={<LoadingSkelet />}>
          <Posts />
        </Suspense>
      </div>        
    </main>
  );
}
