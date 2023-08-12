import { getUserAll } from "@/db/document";
import createUser from "@/db/document/CreateUser";
import { UserData } from "@/types/CreateUser";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: NextResponse) => {
    try {
        const { name, image } = await req.json() as UserData;
        const doc = createUser("user", { name, image });
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