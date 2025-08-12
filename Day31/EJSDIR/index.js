const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/rollDice", (req, res) => {
    let rollVal = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice", { rollVal });
});

app.get("/instagram/:username", (req, res) => {
    const { username } = req.params;
    const instaData = require("./data.json"); // ✅ fixed require spelling
    const data = instaData[username];

    if (data) {
        res.render("instagram", { username, data });
    } else {
        res.send(`<h1>No data found for user: ${username}</h1>`);
    }
});

app.get("/instagram", (req, res) => {
    res.send("This is Instagram home page & <b>Nothing searched on Instagram!</b>");
});
