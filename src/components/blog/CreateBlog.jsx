"use client";
import { useFormState, useFormStatus } from "react-dom";
import { SubmitBlog } from "../../libs/actions";
import TitleInput from "../Forms/Title.input";
import ImageUpload from "../Forms/ImageUpload";
import RichText from "../Forms/RichText";
import FormResult from "../Forms/FormResult";

export default function CreateBlogPost() {
  const [state, formAction] = useFormState(SubmitBlog, {
    message: undefined,
    errors: "",
    fieldValues: {
      title: "",
      ImageUrl: "",
      RichText: "",
    },
  });
  return (
    <form action={formAction}>
      {state.message && (
        <FormResult state={state} category="blog" sword="created" />
      )}
      <ImageUpload error={state.errors} />
      <TitleInput error={state.errors} />
      <div className="flex w-full justify-between gap-y-5 items-center flex-wrap">
        <RichText error={state.errors} />
      </div>
      <SubmitButton />
    </form>
  );
}

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button className="bg-[#7152F3] text-white px-5 py-2 rounded-[8px] h-[40px] w-[96px] mt-5 flex justify-center items-center">
      {pending ? (
        <div className="h-5 w-5 rounded-full border-2 border-dotted animate-spin"></div>
      ) : (
        "Submit"
      )}
    </button>
  );
}
