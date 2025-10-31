const express = require("express");
const app = express();
const user=require("./routes/user.js");
const post=require("./routes/post.js");
const cookieParser=require("cookie-parser");
const session=require("express-session"); // session
const flash=require("connect-flash");
const path = require("path");

//this is for flash
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//routes of post & usere
app.use("/posts",post);
app.use("/users",user);
app.use(flash()); // display message one-time
app.use(cookieParser("secretcode"));
const sessionOptions={secret: "mysupercode",
                 resave: false,
                 saveUninitialized: true
        }
app.use(session(sessionOptions));

//session cookie
app.get("/test",(req,res)=>{
    res.send("test successfully completed");
});

//middleware  for flash
app.use((req,res,next)=>{
    res.locals.infoMsg=req.flash("info");
     res.locals.errorMsg=req.flash("error");
     next();
})
//storing and info 
app.get("/register",(req,res)=>{
    let { name ="unknows"}=req.query;
    req.session.name=name;

    if(name==="unknows")
    {
        req.flash("error","  user is not register..");
    }
    else
    {
    req.flash("info"," new user register successfully...");
    }
    
    res.redirect("/hello");
});

app.get("/hello",(req,res)=>{
    res.render("page.ejs",{name:req.session.name,});
    
});

app.get("/sessioncount",(req,res)=>{
    if(req.session.count)
    {
        req.session.count++;
    }
    else
    {
        req.session.count=1;
    }
    res.send(`  session count is ${req.session.count}`);
});

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