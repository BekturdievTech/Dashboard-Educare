import SignUp from "@/components/admin/Signup";
import Image from "next/image";

export default function page() {
    return (
        <main className="w-full h-screen flex justify-center items-center enter_container">      
          <div>
            <div className="flex justify-start items-center text-[26px] gap-2 font-medium">
              <Image src={"/Brand.png"} width={36} height={36} />
              HRMS
            </div>
            <div className="my-5">
              <h2 className="font-bold text-3xl">Sign Up 👋 </h2>
              <p className="text-[#A2A1A8]">Register new account</p>
            </div>
            {/* <LogIn /> */}
            <SignUp/>
          </div>
        </main>
      );
};
