import FilterBar from "@/components/filterBar/FilterBar";
import Header from "@/components/header/Header";
import LoadingSkelet from "@/components/loadingSkelet";
import { Suspense } from "react";
import Posts from "./Posts";

export default function page() {
  return (
    <main className="container">
      <Header>
        <div>
          <h2 className="text-[20px] font-semibold">All Konferensiyalar</h2>
          <span className="text-[14px] text-[#A2A1A8]">All Konferensiyalar Posts</span>
        </div>
      </Header>
      <div
        className="w-full rounded-[10px] p-5"
        style={{ border: "1px solid rgba(162, 161, 168, 0.2)" }}
      >
        <FilterBar addLink={'konferensiya/create'}/>
        <div className="w-full text-[#A2A1A8] card-table">
          <span>Title</span>
          <span>Level</span>
          <span>Deadline</span>
          <span>Award</span>
          <span>Status</span>
          <span>Action</span>
        </div>
        <Suspense fallback={<LoadingSkelet/>}>
          <Posts />
        </Suspense>
      </div>
    </main>
  );
}