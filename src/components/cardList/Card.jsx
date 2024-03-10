import Image from "next/image";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
import Link from "next/link";

export default function Card({ post }) {
  const { id, featuredImageLink, title, levels, muddat, mukofot } = post;
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
        <Link href={`almashinuv/${id}`}>
          <BiEditAlt size={22} />
        </Link>
        <button>
          <FiTrash2 size={22} color="#f45b69"/>
        </button>
      </div>
    </div>
  );
}
