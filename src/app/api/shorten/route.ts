import URLShortenerService from "@/app/services/URLshortenerService";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    const {originalUrl} = await req.json();
    const shortenerService = new URLShortenerService()
    const shortURL = await shortenerService.shortenUrl(originalUrl);
    return NextResponse.json({shortURL})
}
export async function GET(){
    const shortenerService = new URLShortenerService()
    const urls = await shortenerService.getAllUrls();
    return NextResponse.json({urls})
}