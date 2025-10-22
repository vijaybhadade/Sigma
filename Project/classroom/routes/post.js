const express = require("express");
const router = express.Router();

//POSTS for routes

//index route
router.get("/",(req,res)=>{
    res.send("index page of posts");
});

//show route 
router.get("/:id",(req,res)=>{
    res.send("show of all posts");
});

//delete route
router.delete("/:id",(req,res)=>{
    res.send("delete  of posts");
});

//post route 
router.post("/",(req,res)=>{
    res.send("Post for posts");
});


module.exports=router;
