import URLShortenerService from "@/app/services/URLshortenerService";
import { NextResponse } from "next/server";
import { cache } from "react";

export async function POST(req: Request) {
    const { originalUrl } = await req.json();
    const shortenerService = new URLShortenerService();
    const shortURL = await shortenerService.shortenUrl(originalUrl);

    const response = NextResponse.json({ shortURL });

   
    response.headers.set('Cache-Control', 'public,max-age=180,s-maxage=180, stale-while-revalidate=59');

    return response;
}
const fetchUrls =cache(async ()=>{
      const shortenerService = new URLShortenerService();
    const res = await shortenerService.getAllUrls();
    return  res
})
export async function GET() {
  
     const urls= await  fetchUrls()
    const response = NextResponse.json({ urls });

    response.headers.set('Cache-Control', 'public,max-age=180,s-maxage=180, stale-while-revalidate=59');

    return response;
}
