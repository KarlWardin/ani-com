const router = require("express").Router();
const User = require("../models/User")
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register",async (req,res)=>{
    try{
    //hashing of password 
    const hashedPassword = await bcrypt.hash(req.body.password,10);
    
    //create newUser
    const newUser = new User({
        username: req.body.username,
        password: hashedPassword
    });
    //saving user and respond
       const result = await newUser.save();
       res.send(result);
    }catch(err){
        res.status(400).send(err);
    }
})

//LOGIN
router.post("/login",async (req,res)=>{
    try{
       const user = await User.findOne({username: req.body.username});
       !user && res.status(404).send("user not found");
   
       const valid = await bcrypt.compare(req.body.password, user.password);
       !valid && res.status(400).send("wrong password");

       res.send(user);
    }catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;