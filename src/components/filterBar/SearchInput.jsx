import { CiSearch } from "react-icons/ci";

export default function SearchInput() {
  return (
    <div className="flex items-center relative w-[343px] h-[50px]">
      <CiSearch size={24} className="absolute left-4" />
      <input
        placeholder="Search"
        type="search"
        className="searchInput"
        style={{ border: "1px solid rgba(162, 161, 168, 0.2)" }}
      />
    </div>
  );
}
