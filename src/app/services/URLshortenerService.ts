import URLRepo from "../repo/URLRepo";
import shortid from "shortid"
export  default class URLShortenerService {
    private  URLRepository;
    constructor(){
        this.URLRepository= new URLRepo()
    }
    async shortenUrl(originalUrl:string):Promise<any> {
        let url  = await this.URLRepository.getUrlByOriginalUrl(originalUrl)
        if(url) return url.shortUrl
        let shortUrl =shortid()
        url =await  this.URLRepository.getUrlByOriginalUrl(shortUrl);
        while(url){
        shortUrl =shortid()
        url =await  this.URLRepository.getUrlByOriginalUrl(shortUrl);
        }
        await this.URLRepository.createUrl(originalUrl,shortUrl)
        return shortUrl
    }
    async getAllUrls(){
        return await this.URLRepository.getAllUrls();
    } 
    async getUrlById(id:string){
        return await this.URLRepository.getURLByID(id);
    }
    async getURLByShortUrl(shortUrl:string){
        return await this.URLRepository.getURLByShortUrl(shortUrl)
    }
   
}