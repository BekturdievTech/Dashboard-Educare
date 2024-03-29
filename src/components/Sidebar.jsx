"use client";
import Image from "next/image";
import { MdSpaceDashboard, MdEmojiEvents, MdSettings } from "react-icons/md";
import {
  RiAwardFill,
  RiBriefcase3Fill,
  RiBubbleChartFill,
  RiHonourFill,
  RiMegaphoneFill 
} from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const sideData = [
    {
      title: "Dashboard",
      link: "/dashboard",
      icon: <MdSpaceDashboard size={28} />,
    },
    {
      title: "Almashinuv",
      link: "/almashinuv",
      icon: <RiBubbleChartFill size={28} />,
    },
    {
      title: "Amaliyot",
      link: "/amaliyot",
      icon: <RiBriefcase3Fill size={28} />,
    },
    {
      title: "Grant",
      link: "/grant",
      icon: <RiAwardFill size={28} />,
    },
    {
      title: "Konferensiya",
      link: "/konferensiya",
      icon: <FaPeopleGroup size={28} />,
    },
    {
      title: "Stipendiya",
      link: "/stipendiya",
      icon: <RiHonourFill size={28} />,
    },
    {
      title: "Tanlov",
      link: "/tanlov",
      icon: <MdEmojiEvents size={28} />,
    },
    {
      title: "Blog",
      link: "/blog",
      icon: <RiMegaphoneFill  size={28} />,
    },
    {
      title: "Settings",
      link: "/settings",
      icon: <MdSettings size={28} />,
    },
  ];

  return (
    <nav
      className=" px-[30px] py-5 w-[280px] rounded-[20px] fixed"
      style={{ background: "rgba(162, 161, 168, 0.05)" }}
    >
      <div className="flex justify-start items-center text-[26px] gap-2 font-medium">
        <Image src={"/Brand.png"} width={36} height={36} />
        HRMS
      </div>
      <ul className="pt-[30px] flex flex-col gap-[10px]">
        {sideData.map((item, index) => (
          <li
            className={
              pathname.includes(item.link)
                ? `active-link`
                : `h-[50px] flex justify-start items-center pl-5`
            }
            key={index}
          >
            <Link href={item.link} className="flex items-center gap-4">
              {item.icon} {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
