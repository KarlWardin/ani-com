const mongoose = require("mongoose");

const globalChatSchema = new mongoose.Schema({
     username:{
         type:String,
         required:true
     },
     message:{
         type:String,
         required:true
     }
},{timestamps:true});

module.exports = mongoose.model("Global",globalChatSchema);