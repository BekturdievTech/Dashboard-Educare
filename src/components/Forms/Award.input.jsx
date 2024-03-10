import { RiErrorWarningFill } from "react-icons/ri";

export default function AwardInput({ error, defValue }) {
  return (
    <div className="w-[475px] relative">
      <label htmlFor="title" className="font-semibold">
        Mukofot
      </label>
      <input
        type="text"
        id="title"
        className={`mt-1 outline-none rounded-[10px] w-full p-4 ${
          error?.mukofot && "validate-form"
        }`}
        defaultValue={defValue && defValue}
        placeholder="Award"
        required
        name="mukofot"
        style={{ border: " solid 1px rgba(162, 161, 168, 0.2)" }}
      />

      <span className=" text-[14px] text-[#F45B69] absolute left-0 top-[90px]">
        {error?.mukofot}
      </span>
      <RiErrorWarningFill
        size={26}
        color="#f45b69"
        className={`${error?.mukofot ? "absolute right-3 top-11" : "hidden"}`}
      />
    </div>
  );
}
