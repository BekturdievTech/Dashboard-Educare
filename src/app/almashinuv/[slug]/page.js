import EditForm from "@/components/EditForm/EditForm";
import Header from "../../../components/header/Header";
import Link from "next/link";
import { IoChevronForwardSharp } from "react-icons/io5";
import { getPostbyId } from "@/libs/import/fetch.posts";
export default async function page({ params: { slug } }) {
  const PostInfo = await getPostbyId(slug);
  console.log(`Data: ${PostInfo}`);
  return (
    <main className="container">
      <Header>
        <div>
          <h2 className="text-[20px] font-semibold">Edit Almashinuv Post</h2>
          <div className="flex items-center justify-start gap-1 text-[14px]">
            <Link href={"/almashinuv"}>All Almashinuvlar</Link>
            <IoChevronForwardSharp />
            <Link href={""}>Edit Almashinuv Post</Link>
          </div>
        </div>
      </Header>
      <EditForm post={PostInfo}/>
    </main>
  );
}
