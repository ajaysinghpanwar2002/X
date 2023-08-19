import { UserData } from "@/types/CreateUser";
import bcrypt from "bcrypt";
import { getUserbyName } from "@/db";
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        const { name, password } = await req.json() as UserData;
        const hashedPassword = await getUserbyName("user", name);
        if (!hashedPassword) {
            return new NextResponse(JSON.stringify({ message: "User not found" }),
                { status: 401 }
            );
        }

        const passwordMatch = await bcrypt.compare(password, hashedPassword);
        if (passwordMatch) {
            return new NextResponse(JSON.stringify({ message: "User login successfully" }),
                { status: 200 }
            );
        } else {
            return new NextResponse(JSON.stringify({ message: "Invalid credentials" }),
                { status: 401 }
            );
        }
    } catch (error) {
        console.error("Error login user:", error);
        return new NextResponse(JSON.stringify({ message: "An error occurred" }),
            { status: 500 }
        );
    }
};
