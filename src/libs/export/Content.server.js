"use server";
import { connectToDb } from "../mongoose";
import Contents from "../models/Content.model";

export async function createContent({
  category,
  title,
  description,
  muddati,
  joylashuv,  
  soha,
  level,
  mukofot,
  ImageUrl,
  RichText,
}) {
  connectToDb();
  try {
    Contents.create({
      category: category,
      title: title,
      description: description,
      muddat: muddati,
      location: joylashuv,
      soha: soha,
      levels: level,
      mukofot: mukofot,
      featuredImageLink: ImageUrl,
      richtext: RichText,
    });
  } catch (error) {
    console.log(error);
  }
}
