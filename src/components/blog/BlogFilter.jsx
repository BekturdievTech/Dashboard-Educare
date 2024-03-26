import { GoPlusCircle } from "react-icons/go";
import SearchInput from "../filterBar/SearchInput";
import Link from "next/link";

export default function BlogFilterbar({ addLink }) {
  return (
    <form className="flex justify-between items-center">
      <SearchInput />      
      <div className="flex justify-center items-center gap-5">
        <Link
          href={addLink}
          className="px-5 h-[50px] rounded-[10px] bg-[#7152F3] font-light flex justify-start items-center gap-[10px] text-white"
        >
          <GoPlusCircle color="#fff" size={20} />
          Add New Post
        </Link>
      </div>
    </form>
  );
}
