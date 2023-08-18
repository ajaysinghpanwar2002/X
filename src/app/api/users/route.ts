import { getUserAll, CreateUser } from "@/db";
import { UserData } from "@/types/CreateUser";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: NextResponse) => {
    try {
        const { name, image, password } = await req.json() as UserData;
        const doc = await CreateUser("user", { name, image, password });
        return NextResponse.json({ message: "Success", doc }, { status: 201 });
    } catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
};

export const GET = async (req: Request, res: NextResponse) => {
    try {
        const doc = getUserAll("user");
        if (doc) {
            return NextResponse.json({ message: "Success", doc }, { status: 201 });
        }
    } catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
}