const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
     username:{
       type: String,
       required: true,
       min: 3,
       unique: true
    },
     password:{
        type: String,
        required: true,
        min: 6
     },
     profirePicture:{
         type: String,
         default: ""
     },
     coverPicture:{
         type: String,
         default: ""
     },
     followers:{
         type: Array,
         default: []
     },
     followings:{
         type: Array,
         default: []
     },
     description:{
         type: String
     }
},{timestamps:true});

module.exports = mongoose.model("User",userSchema);