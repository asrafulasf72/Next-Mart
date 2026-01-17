import { NextResponse } from "next/server";
import connectDB from "@/lib/ConnectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";



export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { name, description, price, image } = await req.json();

    if (!name || !price || !image || !description) {
      return NextResponse.json(
        { message: "Name Price Image Description Is required" },
        { status: 400 }
      );
    }

    const db = await connectDB();

    await db.collection("items").insertOne({
      name,
      description,
      price,
      image,
      createdBy: session.user.email,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Item added successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
