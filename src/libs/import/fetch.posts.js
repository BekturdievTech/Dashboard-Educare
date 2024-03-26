"use server"
import Blogs from "../models/Blog.model"
import Contents from "../models/Content.model"
import { connectToDb } from "../mongoose"

export default async function FetchPosts(category) {
    connectToDb()
    const posts =  Contents.find({ category: category })
    return posts;
};

export async function getPostbyId(id){
    connectToDb()
    const postData = Contents.findById(id)    
    return postData;
}

// Blog Posts
export async function FetchBlogs() {
    connectToDb()
    const posts =  Blogs.find();
    return posts;
};

export async function getBlogbyId(id){
    connectToDb()
    const postData = Blogs.findById(id)    
    return postData;
}