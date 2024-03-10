"use server"
import Contents from "../models/Content.model"
import { connectToDb } from "../mongoose"

export default async function FetchPosts() {
    connectToDb()
    const posts =  Contents.find({ category: 'almashinuv' })
    return posts;
};
