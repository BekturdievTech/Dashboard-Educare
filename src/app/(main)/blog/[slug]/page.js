import Header from "@/components/header/Header";
import Link from "next/link";
import { IoChevronForwardSharp } from "react-icons/io5";
import { getBlogbyId } from "@/libs/import/fetch.posts";
import EditBlogPost from "@/components/blog/EditBlog";

export default async function page({ params: { slug } }) {
  const PostInfo = await getBlogbyId(slug);
  let post = await JSON.parse(JSON.stringify(PostInfo));
  return (
    <main className="container">
      <Header>
        <div>
          <h2 className="text-[20px] font-semibold">Edit Blog Post</h2>
          <div className="flex items-center justify-start gap-1 text-[14px]">
            <Link href={"/blog"}>All Blogs</Link>
            <IoChevronForwardSharp />
            <Link href={""}>Edit Blog Post</Link>
          </div>
        </div>
      </Header>
      <EditBlogPost post={post} />
    </main>
  );
}
