const express=require('express');
const app=express(); 


app.use(express.urlencoded({extended:true}));
app.use(express.json());
const port=5050;

app.get('/register',(req,res)=> {
    let {username,password}=req.query;
    res.send(` get request accepted and Welcome ${username}`);
});

app.post('/register',(req,res)=> {
        let {username,password}=req.query;
    res.send(` get request accepted and Welcome ${username}`);
});

app.listen(port,()=> {
    console.log(`Server is running on port ${port}`);
});