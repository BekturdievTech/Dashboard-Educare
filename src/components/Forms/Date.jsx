"use client";
import { IoCalendarOutline } from "react-icons/io5";

export default function DateInput({defValue}) {
  return (
    <div className="">
      <div className="mt-1 w-[475px] relative">
      <label className="font-semibold" htmlFor="muddati">Muddat</label>
        <input
          id="muddati"
          type="date"
          placeholder="Date"
          className="w-full outline-none mt-1 border rounded-[10px] h-[56px] p-4 "
          name="muddati"
          required
          defaultValue={defValue && defValue}
        />
        <IoCalendarOutline
          className="absolute top-11 right-4 cursor-pointer"
          size={24}
        />
      </div>
    </div>
  );
}
