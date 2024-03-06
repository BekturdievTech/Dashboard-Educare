"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { BsSliders } from "react-icons/bs";
import SearchInput from "./SearchInput";
import Checkboxes from "./Checkboxes";

export default function FilterModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className="rounded-[10px] gap-[10px] w-[117px] text-[18px] h-[50px] flex justify-center items-center"
          style={{ border: "1px solid rgba(162, 161, 168, 0.2)" }}
        >
          <BsSliders />
          Filter
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[383px] transform overflow-hidden rounded-2xl bg-white p-5 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className=" text-xl font-medium leading-6"
                  >
                    Filter
                  </Dialog.Title>
                  <div
                    className="h-[1px] w-full my-4"
                    style={{ background: "rgba(162, 161, 168, 0.2)" }}
                  ></div>
                  <SearchInput />
                  <h3 className="text-xl font-medium leading-6 mt-4">Daraja</h3>
                  <Checkboxes />
                  <h3 className="text-xl font-medium leading-6 mt-4">
                    Select Status
                  </h3>
                  <div className="w-full flex justify-start items-center gap-[10px] mt-4">
                    <div className="flex gap-[10px] items-center">
                      <input type="radio" id="active" name="status" value="active" className="w-[18px] h-[18px] accent-[#7152F3]"/>
                      <label htmlFor="active" className="l-[10px]">Active</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                      <input type="radio" id="inactive" name="status" value="inactive" className="w-[18px] h-[18px] accent-[#7152F3]"/>
                      <label htmlFor="inactive" className="l-[10px]">Inactive</label>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <button
                      type="reset"
                      className="inline-flex justify-center items-center w-[166px] h-[50px] rounded-[10px]"
                      style={{ border: "1px solid rgba(162, 161, 168, 0.2)" }}
                      
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="inline-flex justify-center items-center w-[166px] h-[50px] rounded-[10px] bg-[#7152f3] text-white"
                      style={{ border: "1px solid rgba(162, 161, 168, 0.2)" }}
                      
                    >
                      Apply
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
