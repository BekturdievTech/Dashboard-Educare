import { FaCheck } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

export function SuccessContent({ closeModal }) {
  return (
    <div>
      <div className="w-full flex justify-center items-center flex-col gap-3">
        <div
          className=" w-16 h-16 flex justify-center items-center rounded-full"
          style={{
            background: "rgb(63, 194, 138, 0.1)",
            border: "2px solid #3fc28a",
          }}
        >
          <FaCheck size={32} color="#3fc28a" />
        </div>
        <h3 className=" text-3xl font-medium text-center">Done</h3>
        <p className="text-center text-sm text-[#A2A1A8] font-light">
          The post has been deleted successfully.
        </p>
      </div>

      <div className="mt-4 flex justify-between gap-4 w-full">
        <button
          className="inline-flex justify-center items-center w-full h-[50px] rounded-[10px] font-medium cursor-pointer bg-[#3fc28a] text-white outline-none"
          style={{ borderColor: "#3fc28a" }}
          onClick={closeModal}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export function ErrorContent({ closeModal, path }) {
  return (
    <div>
      <div className="w-full flex justify-center items-center flex-col gap-3">
        <div
          className=" w-16 h-16 flex justify-center items-center rounded-full"
          style={{
            background: "rgb(244, 91, 105, 0.1)",
            border: "2px solid #f45b69",
          }}
        >
          <IoCloseSharp size={40} color="#F45B69" />
        </div>
        <h3 className=" text-3xl font-medium text-center">OOPS!</h3>
        <p className="text-center text-sm text-[#A2A1A8] font-light">
          Sorry, something went wrong
        </p>
      </div>

      <div className="mt-4 flex justify-between gap-4 w-full">
        <button
          className="inline-flex justify-center items-center w-full h-[50px] rounded-[10px] font-medium cursor-pointer bg-[#F45B69] text-white outline-none"
          style={{ borderColor: "#F45B69" }}
          onClick={closeModal}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
