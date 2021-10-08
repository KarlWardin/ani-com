const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//create new post
router.post("/",async(req,res)=>{
   const newPost = new Post(req.body);
   try{
       const savedPost = await newPost.save();
       res.send(savedPost);
   }catch(err){
       res.status(500).send("Somthing wrong..can't post it")
   }
});
//update post
router.put("/:id",async(req,res)=>{
    try{
        const savedPost = await Post.findById(req.params.id);
        if(savedPost.userId===req.body.userId){
            const updatedPost = await savedPost.updateOne({$set: req.body});
            res.send(updatedPost);
        }else{
            res.status(403).send("you can't update this post");
        }
    }catch(err){
        res.status(500).send(err);
    }
});

//delete post
router.delete("/:id",async(req,res)=>{
    try{
        const savedPost = await Post.findById(req.params.id);
        if(savedPost.userId===req.body.userId){
            const deletedPost = await savedPost.deleteOne();
            res.send(deletedPost);
        }else{
            res.status(403).send("you can't delete this post");
        }
    }catch(err){
        res.status(500).send(err);
    }
});
//like a post
router.put("/:id",async(req,res)=>{
   try{
       const post = await Post.findById(req.params.id);
       if(!post.likes.includes(req.body.userId)){
           await post.updateOne({$push: {likes: req.body.userId} })
           res.send("post liked");
       }else{
           //unlike
           await post.updateOne({$pull: {likes: req.body.userId} })
           res.send("post unliked");
       }
   }catch(err){
       res.status(500).send(err);
   }
});
//get a post
router.get("/:id",async(req,res)=>{
   try{
       const savedPost = await Post.findById(req.params.id);
       res.send(savedPost);
   }catch(err){
       res.send(err).status(500);
   }
});
//get all post
router.get("/timeline/:id",async(req,res)=>{
   try{
       const currentUser = await User.findById(req.body.userId);
       const userPosts = await Post.find({userId:currentUser._id});
       const friendPosts = await Promise.all(
           currentUser.followings.map(friendId=>{
               Post.find({userId:friendId});
           })
           );
       res.send(userPosts.concat(...friendPosts));
   }catch(err){
       res.status(404).send(err);
   }
});

module.exports = router;