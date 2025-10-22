const express=require("express");
const router=express.Router();

//users for routes 

//index route
router.get("/",(req,res)=>{
    res.send("index page for user");
});

//show route 
router.get("/:id",(req,res)=>{
    res.send("id for user");
});

//delete route
router.delete("/:id",(req,res)=>{
    res.send("delete for user");
});

//post route 
router.post("/",(req,res)=>{
    res.send("Post for user");
});

module.exports=router;
