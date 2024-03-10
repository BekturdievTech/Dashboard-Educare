import Header from "../../../components/header/Header";
import CreateForm from "../../../components/CreateForm/CreateForm";
import Link from "next/link";
import { IoChevronForwardSharp } from "react-icons/io5"

export default function page() {
  return (
    <section className="container">
      <Header>
        <div>
          <h2 className="text-[20px] font-semibold">Add New Stipendiya</h2>
          <div className="flex items-center justify-start gap-1 text-[14px]">
            <Link href={"/stipendiya"}>All Stipendiyalar</Link>
            <IoChevronForwardSharp />
            <Link href={""}>Add New Stipendiya</Link>
          </div>
        </div>
      </Header>
      <div
        className="w-full p-5 rounded-[10px]"
        style={{ border: "1px solid rgba(162, 161, 168, 0.2)" }}
      >
        <CreateForm category="stipendiya" />
      </div>
    </section>
  );
}
