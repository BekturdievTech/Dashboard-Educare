import Image from "next/image";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";

export default function Card({ post }) {
  const { id, imageUrl, title, level, deadline, award, status, seeLink } = post;
  return (
    <div className="card-table text-[14px] border-t pt-[10px]" style={{borderColor: "rgb(162, 161, 168, 0.1)"}}>
      <div className="flex justify-start items-center gap-[10px]">
        <div className="relative min-w-[60px] h-[40px]">
          <Image src={imageUrl} fill objectFit="cover" className="object-top rounded-md"/>
        </div>
        <h3 className="font-semibold truncate">{title}</h3>
      </div>
      <span>{level}</span>
      <span>{deadline}</span>
      <span>{award}</span>
      <span className={status === "active" ? "active-card" : 'inactive-card'}>{status}</span>
      <div className="flex items-center gap-[10px]">
        <button className="">
          <FiEye size={22} />
        </button>
        <button>
          <BiEditAlt size={22} />
        </button>
        <button>
          <FiTrash2 size={22} color="#f45b69"/>
        </button>
      </div>
    </div>
  );
}
