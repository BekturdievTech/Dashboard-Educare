import Admin from "@/libs/models/Admin.model";
import { connectToDb } from "@/libs/mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDb();
    const { email } = await req.json();
    const admin = await Admin.findOne({ email }).select("_id");
    console.log("admin: ", admin);
    return NextResponse.json({ admin });
  } catch (error) {
    console.log(error);
  }
}