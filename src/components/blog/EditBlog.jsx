"use client";
import { useFormState, useFormStatus } from "react-dom";
import TitleInput from "../Forms/Title.input";
import ImageUpload from "../Forms/ImageUpload";
import RichText from "../Forms/RichText";
import FormResult from "../Forms/FormResult";
import { EditBlog } from "@/libs/actions";

export default function EditBlogPost({ post }) {
  const [state, formAction] = useFormState(EditBlog, {
    message: undefined,
    errors: "",
    fieldValues: {
      id: "",
      title: "",
      ImageUrl: "",
      RichText: "",
    },
  });

  const { _id, title, featuredImageLink, richtext } = post;
  
  return (
    <form action={formAction}>
      {state.message && (
        <FormResult state={state} category="blog" sword="updated" />
      )}
      <input type="hidden" value={_id} name="postId" />
      <ImageUpload error={state.errors} defValue={featuredImageLink} />
      <TitleInput error={state.errors} defValue={title} />
      <div className="flex w-full justify-between gap-y-5 items-center flex-wrap">
        <RichText error={state.errors} defValue={richtext} />
      </div>
      <UpdateButton />
    </form>
  );
}

export function UpdateButton() {
  const { pending } = useFormStatus();
  return (
    <button className="bg-[#7152F3] text-white px-5 py-2 rounded-[8px] h-[40px] w-[96px] mt-5 flex justify-center items-center">
      {pending ? (
        <div className="h-5 w-5 rounded-full border-2 border-dotted animate-spin"></div>
      ) : (
        "Update"
      )}
    </button>
  );
}
