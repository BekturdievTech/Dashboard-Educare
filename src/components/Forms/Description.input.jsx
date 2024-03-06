'use client'
import { RiErrorWarningFill } from "react-icons/ri";

export default function Description({error}) {
  return (
    <div className="w-full relative mb-4">
      <label htmlFor="title" className="font-semibold">
        Descripton
      </label>
      <input
        type="text"
        id="title" 
        className={`mt-1 outline-none rounded-[10px] w-full p-4 ${
          error?.description && "validate-form"
        }`}
        placeholder="Add description"
        required
        name="description"
        style={{border: " solid 1px rgba(162, 161, 168, 0.2)"}}
      />
      {error?.description && (
        <>
          <span className=" text-[14px] text-[#F45B69]">
            {error.description}
          <RiErrorWarningFill
            size={26}
            color="#f45b69"
            className="absolute right-3 top-11"
          />
          </span>
        </>
      )}
      
    </div>
  );
}
