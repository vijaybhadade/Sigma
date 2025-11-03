const express = require("express");
const router = express.Router();
const User = require("../modules/user.js");
const wrapAsync = require("../util/wrapAsync.js");
const passport = require("passport");

// ✅ SIGNUP - GET route
router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

// ✅ SIGNUP - POST route
router.post("/signup", wrapAsync(async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.flash("success", "User was successfully registered!");
        res.redirect("/listings");
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}));

// ✅ LOGIN - GET route
router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

// ✅ LOGIN - POST route
router.post("/login",
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true
    }),
    (req, res) => {
        req.flash("success", "Welcome to Wonderlust! You are logged in.");
        res.redirect("/listings"); // redirect to listings or home page
    }
);

module.exports = router;
