import LogIn from "@/components/admin/LogIn";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");
  return (
    <main className="w-full h-screen flex justify-center items-center enter_container">      
      <div>
        <div className="flex justify-start items-center text-[26px] gap-2 font-medium">
          <Image src={"/Brand.png"} width={36} height={36} />
          HRMS
        </div>
        <div className="my-5">
          <h2 className="font-bold text-3xl">Welcome 👋 </h2>
          <p className="text-[#A2A1A8]">Please login here</p>
        </div>
        <LogIn />
      </div>
    </main>
  );
}
