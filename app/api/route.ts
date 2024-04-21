import { pusherServer } from "@/components/pusher";
import { NextResponse } from "next/server";

export async function GET() {
try {
    console.log("...........");
    
    await pusherServer.trigger("123567" , "notificqdcwdation:new" , "hii.................");

    return NextResponse.json("message sent");
} catch (error) {
    console.log(error);
}
}