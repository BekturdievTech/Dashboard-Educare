"use server";
import ValidationForms from "./zod.validate";
import { ValidationBlog } from "./zod.validate";
import { createContent, updateContent } from "./export/Content.server";
import Contents from "./models/Content.model";
import { revalidatePath } from "next/cache";
import { createBlog, updateBlog } from "./export/Blog.server";
import Blogs from "./models/Blog.model";

export default async function SubmitInfo(prevState, formData) {
  const category = formData.get("category");
  const title = formData.get("title");  
  const level = formData.get("level").split(",");
  const muddati = formData.get("muddati");
  const soha = formData.get("soha").split(",");
  const mukofot = formData.get("mukofot");
  const joylashuv = formData.get("joylashuv");
  const ImageUrl = formData.get("ImageUrl");
  const RichText = formData.get("RichText");

  const validateResult = ValidationForms(formData);  
  if (validateResult.message === "Success") {
    await createContent({
      category,
      title,      
      level,
      muddati,
      soha,
      mukofot,
      joylashuv,
      ImageUrl,
      RichText,
    });
  }
  revalidatePath('/')
  return validateResult;
}

export async function EditPost(prevState, formData) {
  const postId = formData.get("postId");
  const category = formData.get("category");
  const title = formData.get("title");  
  const level = formData.get("level").split(",");
  const muddati = formData.get("muddati");
  const soha = formData.get("soha").split(",");
  const mukofot = formData.get("mukofot");
  const joylashuv = formData.get("joylashuv");
  const ImageUrl = formData.get("ImageUrl");
  const RichText = formData.get("RichText");

  const validateResult = ValidationForms(formData);
  console.log(`Level Selected Actions: ${level}`);
  if (validateResult.message === "Success") {
    await updateContent({
      postId,
      category,
      title,      
      level,
      muddati,
      soha,
      mukofot,
      joylashuv,
      ImageUrl,
      RichText,
    });
  }
  revalidatePath('/')
  return validateResult;
}

export async function DeletePost(prexState, formData) {
  const postId = formData.get("postId");
  try {
    await Contents.findOneAndDelete({ id: postId });
    revalidatePath("/");
    return {
      message: "Success",
      errors: undefined,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "error",
      errors: true,
    };
  }
}

// Blog Creation
export async function SubmitBlog(prevState, formData) {
  const title = formData.get("title");  
  const ImageUrl = formData.get("ImageUrl");
  const RichText = formData.get("RichText");

  const validateResult = ValidationBlog(formData);  
  if (validateResult.message === "Success") {
    await createBlog({      
      title,            
      ImageUrl,
      RichText,
    });
  }
  revalidatePath('/')
  return validateResult;
}

export async function EditBlog(prevState, formData) {
  const postId = formData.get("postId");  
  const title = formData.get("title");  
  const ImageUrl = formData.get("ImageUrl");
  const RichText = formData.get("RichText");

  const validateResult = ValidationBlog(formData);  
  if (validateResult.message === "Success") {
    await updateBlog({
      postId,      
      title,      
      ImageUrl,
      RichText,
    });
  }
  revalidatePath('/')
  return validateResult;
}

export async function DeleteBlog(prevState, formData) {
  const postId = formData.get("postId");
  try {
    await Blogs.findOneAndDelete({ id: postId });
    revalidatePath("/");
    return {
      message: "Success",
      errors: undefined,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "error",
      errors: true,
    };
  }
}