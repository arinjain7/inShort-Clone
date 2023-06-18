 import mongoose from "mongoose";

 //.Schema define the structure and property of the document in the MongoDb collection
 const newsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true,
        unique:true
        
    },
    timestamp:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    }
 });

 //we are making a collection named news and validating our schema defined above on it
const news = mongoose.model('news',newsSchema);

export default news;