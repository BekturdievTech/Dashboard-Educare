import Dropdown from "./dropdown";

export default function Header({children}) {
  return (
    <header className="flex justify-between items-center w-full mb-10">
      {children}
      <Dropdown />
    </header>
  );
}
