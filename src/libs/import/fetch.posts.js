"use server"
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