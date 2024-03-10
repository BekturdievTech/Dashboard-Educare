"use server"
import Contents from "../models/Content.model"
import { connectToDb } from "../mongoose"

export default async function FetchPosts() {
    connectToDb()
    const posts =  Contents.find({ category: 'almashinuv' })
    return posts;
};

export async function getPostbyId(id){
    connectToDb()
    const postData = Contents.findById(id)    
    return postData;
}