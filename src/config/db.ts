import mongoose from "mongoose"

const connectDB = async () =>{
    return mongoose.connect("mongodb+srv://abanerjee:souvik2001@cluster0.vjzja.mongodb.net/url")
}
export default connectDB