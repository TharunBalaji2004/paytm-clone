import { NextResponse } from "next/server";
import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export const GET = async () => {
    await client.user.create({
        data: {
            email: "tharunbalaji31@gmail.com",
            name: "Tharun Balaji R"
        }
    });

    return NextResponse.json({
        message: "Data Added"
    })
}


