const express=require("express");

const app=express();
let port=8080;
app.listen(port,()=> {
    console.log(`server started on port ${port}`);
});

app.use((req,res)=> {
    console.log("Request received",req.url);
    res.send("Hello,World!");
})