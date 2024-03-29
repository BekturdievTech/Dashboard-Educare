"use server";
import { connectToDb } from "../mongoose";
import Contents from "../models/Content.model";

export async function createContent({
  category,
  title,  
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

export async function updateContent({
  postId,
  category,
  title,  
  muddati,
  joylashuv,  
  soha,
  level,
  mukofot,
  ImageUrl,
  RichText,
}) {
  try {
    connectToDb();
    await Contents.findOneAndUpdate({id : postId},{
      category: category,
      title: title,      
      muddat: muddati,
      location: joylashuv,
      soha: soha,
      levels: level,
      mukofot: mukofot,
      featuredImageLink: ImageUrl,
      richtext: RichText,
    });
  } catch (error) {
    throw new Error(`Failed to create/update post: ${error.message}`);
  }
}


