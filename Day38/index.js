const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/Chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

main()
    .then((res) => {
        console.log("connection successful..");
    })
    .catch((err) => { console.log(err) });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}


//WrapFunction 
function wrapAsyn(fn){
    return function(req,res,next){
   fn(req,res,next).catch((err)=> next(err));
    }
}
// Index Route - Show all chats
app.get("/chats", wrapAsyn(async (req, res,next) => {
    
     let chats = await Chat.find();
    res.render("index.ejs", { chats });
  
}));

// New Route - Display form to create new chat
// FIX: Placed BEFORE the "/:id" route to avoid conflicts
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

//NEW-Show Route
app.get("/chats/:id", wrapAsyn((async (req, res, next) => {
    
        let {id }=req.params;
        let chat =await Chat.findById(id);
       if(!chat)
       {
        next (new ExpressError(500,"chat does not exit"));
       }
    res.render("show.ejs", { chat }); 
    })));



// Create Route - Save new chat to the database
// FIX: Converted to async/await with try-catch for proper error handling with async function 
app.post("/chats", wrapAsyn(async (req, res, next) => {
    
        let { from, to, msg } = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            msg: msg,
            created_at: new Date()
        });
        await newChat.save();
        res.redirect("/chats");
   
}));

// Edit Route - Show form to edit a chat
app.get("/chats/:id/edit",wrapAsyn(async (req, res, next) => {
    
        let { id } = req.params;
        let chat = await Chat.findById(id);
        if (!chat) {
            // FIX: Pass a proper error to the error handler
            return next(new ExpressError(404, "Chat not found."));
        }
        res.render("edit.ejs", { chat });
    
}));

// Update Route - Update a specific chat in the database
app.put("/chats/:id", wrapAsyn(async (req, res, next) => {
    
        let { id } = req.params;
        let { msg: newMsg } = req.body;
        let updatedChat = await Chat.findByIdAndUpdate(
            id,
            { msg: newMsg },
            { runValidators: true, new: true }
        );
         if (!updatedChat) {
            return next(new ExpressError(404, "Chat not found."));
        }
        res.redirect("/chats");
    
}));

// Destroy Route - Delete a chat
app.delete("/chats/:id", wrapAsyn( async (req, res, next) => {
    
        let { id } = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        if (!deletedChat) {
            return next(new ExpressError(404, "Chat not found."));
        }
        res.redirect("/chats");
    
}));

// Root route
app.get("/", (req, res) => {
    res.send("connect to root");
});

//mongoose error 
const handlerValidationError=(err)=>{
    console.log("this is a validation error.");
    console.dir(dir.message);
    return err;
}

app.use((err,req,res,next)=>{
    if(err==="ValidationError")
    {
        err=handlerValidationError(err);
    }
    next(err);
});

// Error handling middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong!" } = err;
    res.status(status).send(message);
});


let port = 7070;
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});