"use client";
import { useFormState, useFormStatus } from "react-dom";
import { DeleteBlog } from "@/libs/actions";
import { FiTrash2, FiAlertTriangle } from "react-icons/fi";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ErrorContent, SuccessContent } from "../DeletePost/deleteContent";

export default function DeleteBlogPost({ id }) {
  const [state, formAction] = useFormState(DeleteBlog, {
    message: "",
    errors: undefined,
  });  
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
        <button type="button" onClick={openModal}>
          <FiTrash2 size={22} color="#f45b69" />
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
                 
                  {state.message === "Success" ? (
                    <SuccessContent closeModal={closeModal} sword="deleted"/>
                  ) : (
                    <ActionContent
                      formAction={formAction}
                      id={id}
                      closeModal={closeModal}
                    />
                  )}
                  {state.error && <ErrorContent closeModal={closeModal} />}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

function DeleteBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="mt-2 inline-flex justify-center items-center w-full h-[50px] rounded-[10px] bg-[#f45b69] text-white cursor-pointer"
      style={{ border: "1px solid rgba(162, 161, 168, 0.2)" }}
    >
      {pending ? (
        <div className="h-5 w-5 rounded-full border-2 border-dotted animate-spin"></div>
      ) : (
        "Delete"
      )}
    </button>
  );
}

function ActionContent({ formAction, id, closeModal }) {
  return (
    <>
      <form
        action={formAction}
        className="flex justify-start items-start flex-col"
      >
        <div className="w-full flex justify-center items-center flex-col gap-3">
          <div
            className=" w-16 h-16 flex justify-center items-center rounded-full"
            style={{ background: "rgb(244, 91, 105, 0.1)" }}
          >
            <FiAlertTriangle size={32} color="#F45B69" />
          </div>
          <h3 className=" text-3xl font-medium">Are you sure?</h3>
          <p className="text-center text-sm text-[#A2A1A8] font-light">
            This action cannot be undone. All data related to this post will be
            permanently removed from the system
          </p>
          <input type="hidden" name="postId" value={id} />
        </div>
        <DeleteBtn />
      </form>

      <button
        type="reset"
        className="mt-2 inline-flex justify-center items-center w-full h-[50px] rounded-[10px] font-medium cursor-pointer"
        style={{ border: "1px solid rgba(162, 161, 168, 1)" }}
        onClick={closeModal}
      >
        Cancel
      </button>
    </>
  );
}
