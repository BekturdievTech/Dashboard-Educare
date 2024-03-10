import { RiErrorWarningFill } from "react-icons/ri";

export default function LocationInput({ error, defValue }) {
  return (
    <div className="w-[475px] relative">
      <label htmlFor="title" className="font-semibold">
        Location
      </label>
      <input
        type="text"
        id="title"
        defaultValue={defValue && defValue}
        className={`mt-1 outline-none rounded-[10px] w-full p-4 ${
          error?.joylashuv && "validate-form"
        }`}
        placeholder="Location"
        required
        name="joylashuv"
        style={{ border: " solid 1px rgba(162, 161, 168, 0.2)" }}
      />
      <span className=" text-[14px] text-[#F45B69]">{error?.joylashuv}</span>
      <RiErrorWarningFill
        size={26}
        color="#f45b69"
        className={`${error?.joylashuv ? "absolute right-3 top-11" : "hidden"}`}
      />
    </div>
  );
}
