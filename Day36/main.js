
const { faker } = require("@faker-js/faker");
const mysql=require("mysql2");
const express=require("express");
let app=express();
const uuid=require("uuid");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'instagram',
    password: 'vijay@777'
});  

let fakeData = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
  ];
};

//to response to home page 
app.get("/",(req,res)=> {
let q=`SELECT count(*) FROM user`;
try{
    connection.query(q,(err,result)=> {
        if(err) throw err;
        let count=result[0]["count(*)"];
        res.render("home.ejs",{count});
   });      
}catch(err)
{
    res.send("some error occured!...");
}
});

// to create route for response the user page and return (userid,username,email)
 
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  connection.query(q, (err, result) => {
    if (err) {
      console.error("DB Error:", err);
      return res.send("Some error occurred in DB!...");
    }
    res.render("user.ejs", { result });
  });
});

//this is route for edit
app.get("/user/:id/edit", (req, res) => {
  let q = `SELECT * FROM user WHERE id='${id}'`;
  let { id }=req.params;
  connection.query(q, (err, result) => {
    if (err) {
      console.error("DB Error:", err);
      return res.send("Some error occurred in DB!...");
    }
    res.render("edit.ejs", { id });
  });
});

//to server start
let port=8080;

app.listen(port,function () {
 console.log(`The server is running on ${port}`);
});
