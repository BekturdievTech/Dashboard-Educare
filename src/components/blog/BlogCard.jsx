import Image from "next/image";
import { FiEye } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
import Link from "next/link";
import DeleteBlogPost from "./DeleteBlog";

export default function BlogCard({blog}) {
    const { _id, featuredImageLink, title, createdAt } = blog;
    let id = _id.toString();  
    return(
        <div className="blog-card-table text-[14px] border-t pt-[10px]" style={{borderColor: "rgb(162, 161, 168, 0.1)"}}>
        <div className="flex justify-start items-center gap-[10px]">
          <div className="relative min-w-[60px] h-[40px]">
            <Image src={featuredImageLink} fill objectFit="cover" className="object-top rounded-md"/>
          </div>
          <h3 className="font-semibold truncate">{title}</h3>
        </div>                
        <span>{createdAt}</span>        
        <div className="flex items-center gap-[10px]">
          <button className="">
            <FiEye size={22} />
          </button>
          <Link href={`blog/${id}`}>
            <BiEditAlt size={22} />
          </Link>
          <DeleteBlogPost id={id}/>
        </div>
      </div>
    )
};
