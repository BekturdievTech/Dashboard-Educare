import Image from "next/image";
import { FiEye } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
import Link from "next/link";
import DeleteModal from "../DeletePost/deleteModal";

export default function Card({ post }) {
  const { _id, featuredImageLink, title, levels, muddat, mukofot, category } = post;
  let id = _id.toString();  
  
  const status = "active";
  return (
    <div className="card-table text-[14px] border-t pt-[10px]" style={{borderColor: "rgb(162, 161, 168, 0.1)"}}>
      <div className="flex justify-start items-center gap-[10px]">
        <div className="relative min-w-[60px] h-[40px]">
          <Image src={featuredImageLink} fill objectFit="cover" className="object-top rounded-md"/>
        </div>
        <h3 className="font-semibold truncate">{title}</h3>
      </div>
      <span>{levels}</span>
      <span>{muddat}</span>
      <span>{mukofot}</span>
      <span className={status === "active" ? "active-card" : 'inactive-card'}>{status}</span>
      <div className="flex items-center gap-[10px]">
        <button className="">
          <FiEye size={22} />
        </button>
        <Link href={`${category}/${id}`}>
          <BiEditAlt size={22} />
        </Link>
        <DeleteModal id={id}/>
      </div>
    </div>
  );
}
