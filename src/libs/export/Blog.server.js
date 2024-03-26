"use server";
import Blogs from "../models/Blog.model";
import { connectToDb } from "../mongoose";


export async function createBlog({  
  title,  
  ImageUrl,
  RichText,
}) {
  connectToDb();
  try {
    Blogs.create({      
      title: title,            
      featuredImageLink: ImageUrl,
      richtext: RichText,
    });
    
  } catch (error) {
    console.log(error);
  }
}

export async function updateBlog({
  postId,
  title, 
  ImageUrl,
  RichText,
}) {
  try {
    connectToDb();
    await Blogs.findOneAndUpdate({id : postId},{      
      title: title,      
      featuredImageLink: ImageUrl,
      richtext: RichText,
    });
  } catch (error) {
    throw new Error(`Failed to create/update post: ${error.message}`);
  }
}