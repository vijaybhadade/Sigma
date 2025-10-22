const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate= require("ejs-Mate");
const wrapAsync=require("./util/wrapAsync.js");
const ExpressError=require("./util/ExpressError.js");


const listing=require("./router/listing.js");
const reviewRouter=require("./router/review.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public/"))); 
app.use('/assets',express.static(path.join(__dirname,'assets')));
app.use(express.json());

app.get("/", wrapAsync((req, res) => {
  res.redirect("/listings");
}));




//Router for listings
app.use("/listings",listing);
app.use("/listings/:id/reviews",reviewRouter);



app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});
//Middleware handler
app.use((err, req, res, next) => {
  if (res.headersSent) {
    console.log("Headers already sent! Skipping error handler.");
    return next(err);
  }
  let { status = 500, message = "Something went wrong" } = err;
  res.status(status).render("Error.ejs", { message });
});

app.listen(8080, () => {
  console.log("server is listening to port 8080");
}); 