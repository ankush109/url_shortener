import mongoose ,{Document,Model,Schema} from "mongoose"

const urlschema= new mongoose.Schema({
    originalUrl:{
        type:String,
        required:true,
        unique:true
    },
    shortUrl:{
        type:String,
        required:true,
        unique:true

    }
},{
    timestamps:true
})
export interface IUrl extends Document {
  originalUrl:String,
  shortUrl:String
}

const Url :Model<IUrl> =mongoose.models.Url || mongoose.model('Url',urlschema)
export default Url