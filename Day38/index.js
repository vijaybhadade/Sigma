const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");
const Chat=require("./models/Chat.js");

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");


main()
.then((res)=> {
    console.log("connection successfull..");
})
.catch((err)=>{ console.log(err)});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
//add chat on whatsapp
const chat2=new Chat({
    from:"vijay",
    to:"rahul",
    msg:"i am fine, what about you?",
    created_at:new Date()
});
//save chat 
let result= chat2.save();
result.then((res)=>{ console.log(res)});

//index route
app.get("/chats",async(req,res)=>
{
    let chats=await Chat.find();
    res.render("index.ejs",{ chats });
});

//new route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

//Create route
app.post("/chats",(req,res)=>{
    let { from, to , msg}=req.body;
    let newChat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    })
newChat.save()
           .then(()=>{
              console.log("chat is saved");
        })
            .catch((err)=>{ console.log(err)});
               res.redirect("/chats");
});



app.get("/",(req,res)=> {
    res.send("connect to root");
});

let port=7070;

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})