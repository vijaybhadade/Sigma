const express = require('express');
const app = express();
const path = require('path');
const port = 6060;
const methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Sample posts
let posts = [
    { username: "vijay", content: "this is my first post", id: uuidv4() },
    { username: "ironman", content: "this is my best post", id: uuidv4() },
    { username: "suraj", content: "this is my last post", id: uuidv4() }
];

// Show all posts
app.get("/posts", (req, res) => {
    res.render("main", { posts });
});

// Show new post form
app.get("/posts/new", (req, res) => {
    res.render("form");
});

// Handle new post submit
app.post("/posts/new", (req, res) => {
    const { username, content } = req.body;
    let id = uuidv4();
    posts.push({ username, content, id });
    res.redirect("/posts");
});

// Show single post
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("show", { post });
});

// Show edit form
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);
    res.render("edit", { post });
});

// Handle edit (PATCH)
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;

    let post = posts.find(p => p.id === id);
    if (post) {
        post.content = newContent;
    }
    res.redirect("/posts");
});

// Handle delete
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter(p => p.id !== id);
    res.redirect("/posts");
});

// Public folder for css/js/images
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
