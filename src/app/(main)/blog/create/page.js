import Header from "@/components/header/Header";
import Link from "next/link";
import { IoChevronForwardSharp } from "react-icons/io5"
import CreateBlogPost from "@/components/blog/CreateBlog";

export default function page() {
  return (
    <section className="container">
      <Header>
        <div>
          <h2 className="text-[20px] font-semibold">Add New Blog Post</h2>
          <div className="flex items-center justify-start gap-1 text-[14px]">
            <Link href={"/blog"}>All Blog Posts</Link>
            <IoChevronForwardSharp />
            <Link href={""}>Add New Blog Post</Link>
          </div>
        </div>
      </Header>
      <div
        className="w-full p-5 rounded-[10px]"
        style={{ border: "1px solid rgba(162, 161, 168, 0.2)" }}
      >
        <CreateBlogPost/>
      </div>
    </section>
  );
}
