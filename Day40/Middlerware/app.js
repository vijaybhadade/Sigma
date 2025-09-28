const express=require('express');
const app=express();
const ExpressError=require('./ExpressError');


//middleware
//1.middleware 
// app.use((req,res)=>{
//      let {query}=req.query;
//     console.log(query);
//     console.log("this is middleware:");
//     res.send("middleware is terminal..");
// });


//2.middleware (using next)
// app.use("",(req,res,next)=>{
//     console.log("this is 1 middleware");
//     next(); 
// });

// app.use("",(req,res,next)=>{
//     console.log("this is 2 middleware");
//     next(); 
// });

// here create a logger(provide useful information on console)

// app.use((req,res,next)=>{
//     req.time= new Date(Date.now()).toString();
//     console.log(req.method,req.hostname,req.path,req.time);
//     return next();
// });

//app.use.callback 

// app.get("/abc",(req,res,next)=>{
//     console.log(" hi i am only for abc");
//     next();
// });

//token check api logger 
const checkToken=(req,res,next)=>{
let {token}=req.query;
    if(token=='giveaccess')
    {
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
}
app.use("/api",checkToken,(req,res,next)=>{
    res.send("data");
    next();
});

app.get("/random",(req,res,next)=> {
    console.log("welcome to root terminale");
    res.send("this is random page");
    return next();
});


// error handler 
app.get("/admin",(req,res)=>{
  throw new ExpressError(403," access admin is denied..");
});
//custome error
app.use( (err,req,res,next)=>{
    let { status=403,message="some error occured"}=err;
    res.status(status).send(message);
    next();
});

// 404  page 
// app.use((req,res)=>{
//     res.status(404).send("Page is not Found");
// })
let port=8080;
app.listen(port,()=>{
    console.log(`server is starting on port : ${port}`);
});