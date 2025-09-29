const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./modules/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate= require("ejs-Mate");
const wrapAsync=require("./util/wrapAsync.js");
const ExpressError=require("./util/ExpressError.js");
const listingSchema = require('./schema');

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

//validation schema
const validateListing=(req,res,next)=>{
 const{value,error } = listingSchema.validate(req.body);

    if (error) {
        
       let errMsg= error.details.map(el => el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else
    {
      req.validatedBody = value;
  next();
    }

};
//Index Route
app.get("/listings", wrapAsync( async (req, res) => {
 
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
}));

//New Route
app.get("/listings/new",  (req, res) => {
  res.render("listings/new.ejs");
});

//Show Route
app.get("/listings/:id",  wrapAsync (async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
}));

//Create Route
app.post("/listings",validateListing, wrapAsync(async (req, res) => {
   
    const newListing = new Listing(value.validatedBody.listing);
    await newListing.save();    
    console.log("Saved listing:", newListing);
    res.redirect("/listings");
}));




//Edit Route
app.get("/listings/:id/edit", wrapAsync( async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
}));

//Update Route
app.put("/listings/:id", validateListing,wrapAsync( async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, {...req.body.listing });
  res.redirect(`/listings/${id}`);
}));

//Delete Route
app.delete("/listings/:id",wrapAsync( async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
}));

app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});
//Middleware handler
app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong" } = err;
  res.status(status).render("Error.ejs", { message });
});

app.listen(8080, () => {
  console.log("server is listening to port 8080");
}); 