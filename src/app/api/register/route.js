import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Admin from "@/libs/models/Admin.model";
import { connectToDb } from "@/libs/mongoose";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectToDb();
    await Admin.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "Admin registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the new admin." },
      { status: 500 }
    );
  }
}