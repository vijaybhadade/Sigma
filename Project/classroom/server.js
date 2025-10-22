const express = require("express");
const app = express();
const user=require("./routes/user.js");
const post=require("./routes/post.js");
const cookieParser=require("cookie-parser");

//routes of post & user
app.use("/posts",post);
app.use("/users",user);
app.use(cookieParser("secretcode"));

//signed cookie
app.get("/getsignedcookie",(req,res)=>{
    res.cookie("language","hindi",{signed: true});
    res.send(" signed done!");
})

//signed verify
app.get("/verify",(req,res)=>{
   console.log(req.signedCookies);//signed cookies 
   console.log(req.cookies);// normal cookies
    res.send({cookie:req.cookies,signedCookies:req.signedCookies});
});

//parse cookie
app.get("/getcookie",(req,res)=>{
    console.dir(req.cookies);
    res.send("got cookies!");
})

app.get("/",(req,res)=>{
    let{ name="vijay"}=req.cookies;
    res.send(`Hii, ${name}`);
});

// send cookie to server
app.get("/setCookie",(req,res)=>{
    res.cookie("greet","namaste");
    res.cookie("origin","india");
    res.send(" we send cookie to you!");
});

app.listen(3000,()=>{
    console.log("server is starting from 3000");
});