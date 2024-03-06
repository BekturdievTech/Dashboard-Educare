"use server";
import ValidationForms from "./zod.validate";
import { createContent } from "./export/Content.server";

export default async function SubmitInfo(prevState, formData) {
  const category = formData.get("category");
  const title = formData.get("title");
  const description = formData.get("description");
  const level = formData.get("level").split(",");
  const muddati = formData.get("muddati");
  const soha = formData.get("soha").split(",");
  const mukofot = formData.get("mukofot");
  const joylashuv = formData.get("joylashuv");
  const ImageUrl = formData.get("ImageUrl");
  const RichText = formData.get("RichText");

  const validateResult = ValidationForms(formData);
  console.log(validateResult);
  if (validateResult.message === "Success") {
    createContent({
      category,
      title,
      description,
      level,
      muddati,
      soha,
      mukofot,
      joylashuv,
      ImageUrl,
      RichText,
    });
  }
  return validateResult
}
