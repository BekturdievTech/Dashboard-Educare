import { z } from "zod";

const basicValidation = "Please fill out the form";

export const schema = z.object({
    title: z.string({basicValidation}).min(10, { message: "Title must be at least 10 characters long" }),
    description: z.string({basicValidation}).min(20, { message: "Description must be at least 20 characters long" }),
    level: z.string({ basicValidation }).min(1, { message: "Select a value" }),
    muddati: z.string().min(1, { basicValidation }),
    soha: z.string({ basicValidation }).min(1, { message: "Select a value" }),
    mukofot: z.string({ basicValidation }).min(2, { basicValidation }),
    joylashuv: z.string().min(2, { basicValidation }),
    ImageUrl: z.string().min(2, { basicValidation }),
    RichText: z.string().min(100, { message: "Rich-Text must be at least 100 characters long" }),
  });



export default function ValidationForms(formValues){
  const title = formValues.get("title");
  const description = formValues.get("description");
  const level = formValues.get("level");
  const muddati = formValues.get("muddati");
  const soha = formValues.get("soha");
  const mukofot = formValues.get("mukofot");
  const joylashuv = formValues.get("joylashuv");
  const ImageUrl = formValues.get("ImageUrl");
  const RichText = formValues.get("RichText");

  try {
    schema.parse({
      title,
      description,
      level,
      muddati,
      soha,
      mukofot,
      joylashuv,
      ImageUrl,
      RichText
    });
    
    return {
      message: "Success",
      errors: undefined,
      fieldValues: {
        title: "",
        description: "",
        level: "",
        muddati: "",
        soha: "",
        mukofot: "",
        joylashuv: "",
        ImageUrl: "",
        RichText: "",
      },
    };

  } catch (error) {
    const zodError = error.flatten();
    const {fieldErrors} = zodError;    

    return {
      message: "error",
      errors: {
        title: fieldErrors["title"]?.[0] ?? "",
        description: fieldErrors["description"]?.[0] ?? "",
        level: fieldErrors["level"]?.[0] ?? "",
        muddati: fieldErrors["muddati"]?.[0] ?? "",
        soha: fieldErrors["soha"]?.[0] ?? "",
        mukofot: fieldErrors["mukofot"]?.[0] ?? "",
        joylashuv: fieldErrors["joylashuv"]?.[0] ?? "",
        ImageUrl: fieldErrors["ImageUrl"]?.[0] ?? "",
        RichText: fieldErrors["RichText"]?.[0] ?? "",
      },
      fieldValues: {
        title,
        description,
        level,
        muddati,
        soha,
        mukofot,
        joylashuv,
        ImageUrl,
        RichText
      },
    };
  }
}