const express = require("express");

const app = express();
let port = 8080;

// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// Routes
// app.get("/home", (req, res) => {
//     res.send("Welcome to home page!");
// });

// app.get("/about", (req, res) => {
//     res.send("Welcome to about page!");
// });

// app.get("/project", (req, res) => {
//     res.send("Welcome to project page!");
// });

// app.post("/", (req, res) => {
//     res.send("Welcome to root path!");
// });

console.log("this is path parameter(req.params)");
app.get("/:username/:id",(req,res)=>{
    let username=req.params.username;
    let id=req.params.id;
    res.send(`welcome to our account ${username} with ID ${id}`)
})

// Catch-all for ALL HTTP methods and unmatched routes
// app.all(/.*/, (req, res) => {
//     console.log("Request received", req.url);
//     res.send("This path does not exist");
// });

console.log("this is query parameter(req.query)");
app.get("/query", (req, res) => {
    let searchTerm = req.query.search;
    let color=req.query.color;
    if(!searchTerm || !color){
        res.send("<h1>Not searched any thing</h1>")
    }
    res.send(`You searched for: ${searchTerm} and color is ${color}`);
});