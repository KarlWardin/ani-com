const router = require("express").Router();
const GlobalMessage = require("../models/Global");


//create new message
router.post("/send",async(req,res)=>{
   const newMessage = new GlobalMessage(req.body);
   try{
       const message = await newMessage.save();
       res.send(message);
   }catch(err){
       res.status(500).send("Somthing wrong..can't post it")
   }
});
//get all messages
router.get("/all",async(req,res)=>{
   try{
       const allMessage = await GlobalMessage.find().sort({ "createdAt" : -1}).limit(100);
       res.send(allMessage);
   }catch(err){
       res.status(404).send(err);
   }
});

module.exports = router;