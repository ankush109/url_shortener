import connectDB from "@/config/db";
import Url, { IUrl } from "../models/URL";
export default class URLRepo {
   private urlmodel;
    constructor(){
        connectDB()
        this.urlmodel=Url
    }
   async getURLByID(id:string):Promise<IUrl | null>{
       return await this.urlmodel.findOne({shortUrl:id}).lean()
    }
   async getURLByShortUrl(shortUrl:string):Promise<IUrl | null>{
       return await this.urlmodel.findOne({
        shortUrl
       }).lean()
    }  
    async getUrlByOriginalUrl(originalUrl:string):Promise<IUrl | null>{
       return await this.urlmodel.findOne({
        originalUrl
       }).lean()
    }
    async deleteUrl(id:string):Promise<IUrl | null>{
       return await this.urlmodel.findByIdAndDelete(id).lean()
    }
     async getAllUrls():Promise<any>{
       return  this.urlmodel.find().lean();
    }
     async createUrl(originalUrl:string,shortUrl:string):Promise<IUrl | null>{
       return await this.urlmodel.create({originalUrl,shortUrl})
    }
}
