'use client';
import { useSession } from "next-auth/react";
import Header from "@/components/header/Header";

export default function DefaultHeader() {
  const { data: session } = useSession();

  return (
    <Header>
      <div>
        <h2 className="text-[20px] font-semibold">
          Hello {session?.user?.name}
        </h2>
        <span className="text-[14px] text-[#A2A1A8]">Good Morning</span>
      </div>
    </Header>
  );
}
