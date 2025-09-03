const mongoose=require("mongoose");
const Chat=require("./models/Chat.js");
main()
.then(() => {
    console.log("connection successfull..");
})
.catch((err)=>{ console.log(err)});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
//add chat on whatsapp
let allChats=[
    {
        from:"vishal",
        to:"rani",
        msg:"Hey rani,How are you?",
        created_at:new Date()
    },
     {
        from:"Govind",
        to:"Gajanan",
        msg:"Come fast, i am waiting for you.",
        created_at:new Date()
    },
     {
        from:"shital",
        to:"vijay",
        msg:"Do not call again..",
        created_at:new Date()
    },
     {
        from:"parmeshwar",
        to:"shrikant",
        msg:"i am missing brother you..",
        created_at:new Date()
    },
     {
        from:"Chaten",
        to:"Vaishnavi",
        msg:"Give me miss...",
        created_at:new Date()
    }
];

Chat.insertMany(allChats);