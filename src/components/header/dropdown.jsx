"use client";
import { RxChevronDown } from "react-icons/rx";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Dropdown() {
  const { data: session } = useSession();  

  return (
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className=" flex h-[55px] justify-start items-center rounded-lg p-[5px] gap-[5px]"
            style={{ border: "1px solid rgba(162, 161, 168, 0.2)" }}
          >
            <div className="w-[40px] h-[45px] relative rounded-lg">
              <Image
                src={`/${session?.user?.image}`} // "/manager.jpg"
                fill
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex justify-start flex-col items-start">
              <h3 className="font-semibold">{session?.user?.name}</h3>
              <span className="text-[#A2A1A8] text-xs">{session?.user?.role}</span>
            </div>
            <RxChevronDown size={24} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className=" bg-white absolute right-0 mt-2 w-[184px] rounded-md p-2  ring-black/5" style={{border: "1px solid rgba(162, 161, 168, 0.2)"}}>
            <div>
              <Menu.Item>
                {({active}) => (
                  <button  className={`${
                    active ? "bg-gray-100" : ""
                  } group w-full flex justify-start items-center gap-2 p-2 rounded-lg`}>
                    <IoPersonOutline />
                    My Profile
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-100" : ""
                    } group w-full flex justify-start items-center gap-2 p-2 rounded-lg`}
                    style={{color: "#F45B69"}}
                    onClick={() => signOut()}
                  >            
                  <TbLogout />
                    Log out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
