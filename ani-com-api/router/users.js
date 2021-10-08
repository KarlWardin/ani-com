const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//update user
router.put("/:id", async (req, res) => {
    if (req.body.id === req.params.id) {
        if (req.body.password) {
            try {
                req.body.password = await bcrypt.hash(req.body.passsword, 10);
            } catch (err) {
                res.status(500).send(err);
            }
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.body.id, {
                $set: req.body
            });
            res.send(updatedUser);
        } catch (err) {
            res.send(res);
        }
    } else {
        res.send("you can't change others details");
    }
});
//delete user
router.delete("/:id", async (req, res) => {
    if (req.body.id === req.params.id) {
        try {
            const deletedUser = await User.findByIdAndDelete(req.body.id);
            res.send(deletedUser);
        } catch (err) {
            res.send(res);
        }
    } else {
        res.send("you can't change others details");
    }
});
//get a user
router.get("/", async (req, res) => {
    const id = req.query.id;
    const username = req.query.username;
    try {
        const user = {};
        if(id !== ""){
            user = await User.findbyId(id);
        }else{
            user = await User.find({"username":username});
        }
        const { password, updatedAt, ...other } = user._doc;
        res.send(other);
    } catch (err) {
        res.send(err);
    }
});
//follow a user
router.put("/:id/follow", async (req, res) => {
    if (req.body.id !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currUser = await User.findById(req.body.id);
            if (!user.followers.includes(req.body.id)) {
                await user.followers.updateOne({ $push: { followers: req.body.id } });
                await currUser.followings.updateOne({ $push: { followings: req.params.id } });
                res.send("user have been followed");
            } else {
                res.status(403).send("you are alredy a follower");
            }
        } catch (err) {
            res.status(500).send(err);
        }
    } else {
        res.status(403).send("you can't follow yourself");
    }
});
//unfollow a user
router.put("/:id/unfollow", async (req, res) => {
    if (req.body.id !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currUser = await User.findById(req.body.id);
            if (user.followers.includes(req.body.id)) {
                await user.followers.updateOne({ $pull: { followers: req.body.id } });
                await currUser.followings.updateOne({ $pull: { followings: req.params.id } });
                res.send("user have been unfollowed");
            } else {
                res.status(403).send("you can't unfollow");
            }
        } catch (err) {
            res.status(500).send(err);
        }
    } else {
        res.status(403).send("you can't unfollow yourself");
    }
});

module.exports = router;