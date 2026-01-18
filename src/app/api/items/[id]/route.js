import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import connectDB from "@/lib/ConnectDB";

export async function GET(req, context) {
  try {
    const { params } = context; // unwrap context
    const { id } =await params;

    const db = await connectDB();

    const item = await db
      .collection("items")
      .findOne({ _id: new ObjectId(id) });

    if (!item) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json(item);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to fetch item" }, { status: 500 });
  }
}
