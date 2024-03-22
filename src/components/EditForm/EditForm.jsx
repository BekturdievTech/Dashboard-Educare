"use client";
import { useFormState, useFormStatus } from "react-dom";
import { EditPost } from "@/libs/actions";
import TitleInput from "../Forms/Title.input";
import LevelSelect from "../Forms/Level.select";
import DateInput from "../Forms/Date";
import SohaSelect from "../Forms/Soha.select";
import AwardInput from "../Forms/Award.input";
import LocationInput from "../Forms/Location.input";
import ImageUpload from "../Forms/ImageUpload";
import RichText from "../Forms/RichText";
import FormResult from "../Forms/Form.Modal";

export function SubmitButton() {
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

export default function EditForm({ post }) {
  const [state, formAction] = useFormState(EditPost, {
    message: undefined,
    errors: "",
    fieldValues: {
      id: "",
      category: "",
      title: "",    
      level: "",
      muddati: "",
      soha: "",
      mukofot: "",
      joylashuv: "",
      ImageUrl: "",
      RichText: "",
    },
  });

  const {
    _id,
    category,
    title,    
    muddat,
    location,
    soha,
    levels,
    mukofot,
    featuredImageLink,
    richtext,
  } = post;

  return (
    <>
      <form
        action={formAction}
        className="flex justify-start items-start flex-col"
      >
        {state.message && <FormResult state={state} category={category} />}      
        <input type="hidden" value={_id} name="postId" />
        <ImageUpload error={state.errors} defValue={featuredImageLink} />
        <TitleInput error={state.errors} defValue={title} />        
        <input type="hidden" value={category} name="category" />
        <div className="flex w-full justify-between gap-y-5 items-center flex-wrap">
          <LevelSelect defValue={levels} />
          <DateInput error={state.errors} defValue={muddat} />
          <SohaSelect error={state.errors} defValue={soha} />
          <AwardInput error={state.errors} defValue={mukofot} />
          <LocationInput error={state.errors} defValue={location} />
          <RichText error={state.errors} defValue={richtext} />
        </div>
        <SubmitButton />
      </form>
    </>
  );
}
