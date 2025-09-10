const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");
const Chat=require("./models/Chat.js");
const methodOverride=require("method-override");

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(methodOverride("_method"));

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

//new route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});


//edit  route
app.get("/chats/:id/edit",async(req,res)=>{
    let { id }=req.params;
    let chat=await Chat.findById(id);
     res.render("edit.ejs",{ chat });
});

//update route
app.put("/chats/:id",async(req,res)=>{
    let { id}=req.params;
    let  { msg:newMsg}=req.body;
    let chat=await Chat.findByIdAndUpdate(id,{ msg:newMsg },{runValidators:true,new:true});
    res.redirect("/chats"); 
});

//destroy route
app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

app.get("/",(req,res)=> {
    res.send("connect to root");
});

let port=7070;

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})