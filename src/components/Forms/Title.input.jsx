'use client'

import { RiErrorWarningFill } from "react-icons/ri";
export default function TitleInput({ error }) {
  
  return (
    <div className="w-full relative mb-4">
      <label htmlFor="title" className="font-semibold">
        Title
      </label>
      <input
        type="text"
        id="title"
        className={`mt-1 outline-none rounded-[10px] w-full p-4 font-semibold placeholder:font-normal ${
          error?.title && "validate-form"
        }`}
        placeholder="Add title"
        required
        name="title"
        style={{ border: " solid 1px rgba(162, 161, 168, 0.2)" }}
      />
      <span className=" text-[14px] text-[#F45B69]">
        {error?.title}
      </span>
      <RiErrorWarningFill
        size={26}
        color="#f45b69"
        className={`${error?.title ? "absolute right-3 top-11" : "hidden"}`}
      />
    </div>
  );
}
