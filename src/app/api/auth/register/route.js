import connectDB from "@/lib/ConnectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const {name,email,password}= await req.json();

        if(!name || !email || !password){
            return NextResponse.json(
                {message: "All fields required"},
                {status: 400}
            );
        }

        const db = await connectDB();

        const userExists = await db.collection("users").findOne({email})

        if(userExists){
            return NextResponse.json(
                {message: "User already exists"},
                {status:400}
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.collection("users").insertOne({
            name,
            email,
            password: hashedPassword,
            provider:"credentials",
            createdAt: new Date(),
        })

        return NextResponse.json(
            {message: "Registration successful"},
            {status: 201}
        );

    }catch(error){
        return NextResponse.json(
            {message: "Something went wrong"},
            {status: 500}
        )
    }
}