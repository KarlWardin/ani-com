const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
     userId:{
         type:String,
         required:true
     },
     image:{
         type:String
     },
     likes:{
        type:Array,
        default:[]
     },
     description:{
         type: String
     },
     messageId:{
         type:String
     }
},{timestamps:true});

module.exports = mongoose.model("Post",postSchema);