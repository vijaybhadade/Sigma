const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


//This is part of the Dice Rolling App 
app.get("/rollDice", (req, res) => {
    let rollVal = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice", { rollVal });
});

// This is part for serving static files
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
//thisi is part of instagram app
app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json"); // ✅ fixed require spelling
    const data = instaData[username];
    if(data)
    {
     res.render("instagram",{username,data});
    }
    else
    {
        res.render("error.ejs");
    }
    
   
});

app.get("/instagram", (req, res) => {
    res.send("This is Instagram home page & <b>Nothing searched on Instagram!</b>");
});
