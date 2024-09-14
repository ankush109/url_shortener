import { redirect } from "next/navigation";
import URLShortenerService from "../services/URLshortenerService";
import { revalidatePath } from "next/cache";

export const shortUrlAction = async (formData:FormData)=>{
    "use server"
    const originalUrl = formData.get('url') as string;
    const shortenerService = new URLShortenerService();
    shortenerService.shortenUrl(originalUrl);
    

}
