import Dropdown from "./dropdown";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mb-10">
      <div>
        <h2 className="text-[20px] font-semibold">Hello Otabek</h2>
        <span className="text-[14px] text-[#A2A1A8]">Good Morning</span>
      </div>
      <Dropdown />
    </header>
  );
}
