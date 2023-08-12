import { getUserOne } from "@/db/document";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: NextResponse) => {
        const { id } = await req.json();
        try {
                const doc = getUserOne("user", { id });
                if (doc) {
                        return NextResponse.json({ message: "Success", doc }, { status: 201 });
                }
        } catch (err) {
                return NextResponse.json({ message: "Error", err }, { status: 500 });
        }
}