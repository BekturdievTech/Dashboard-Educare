"use client";
import { useFormState, useFormStatus } from "react-dom";
import SubmitInfo from "../../libs/actions";
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
        "Submit"
      )}
    </button>
  );
}

export default function CreateForm({ category }) {
  const [state, formAction] = useFormState(SubmitInfo, {
    message: undefined,
    errors: '',
    fieldValues: {
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
  console.log(category);

  return (
    <>
      <form
        action={formAction}
        className="flex justify-start items-start flex-col"
      >
        {state.message && <FormResult state={state} category={category} />}        
        <ImageUpload error={state.errors} />
        <TitleInput error={state.errors} />
        <input type="hidden" value={category} name="category" />
        <div className="flex w-full justify-between gap-y-5 items-center flex-wrap">
          <LevelSelect />
          <DateInput error={state.errors} />
          <SohaSelect error={state.errors} />
          <AwardInput error={state.errors} />
          <LocationInput error={state.errors} />
          <RichText error={state.errors} />
        </div>
        <SubmitButton />
      </form>
      
    </>
  );
}
