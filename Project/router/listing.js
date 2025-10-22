const express=require("express");
const router=express.Router();
const wrapAsync=require("../util/wrapAsync.js");
const ExpressError=require("../util/ExpressError.js");
const  listingSchema = require('../schema');
const Listing = require("../modules/listing.js");

//validation 
//validation  schema for listings 
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
router.get("/", wrapAsync( async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
}));

//New Route
router.get("/new",  (req, res) => {
  res.render("listings/new.ejs");
});

//Show Route
router.get("/:id",  wrapAsync (async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate('reviews');
  res.render("listings/show.ejs", { listing });
}));

//Create Route
router.post("/",validateListing, wrapAsync(async (req, res) => {
    const newListing = new Listing(req.validatedBody.listing);
    await newListing.save();    
    console.log("Saved listing:", newListing);
    res.redirect("/listings");
}));


//Edit Route
router.get("/:id/edit", wrapAsync( async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
}));



//Update Route
router.put("/:id", validateListing,wrapAsync( async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, {...req.body.listing });
  res.redirect(`/listings/${id}`);
}));

//Delete Route
router.delete("/:id",wrapAsync( async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
}));





module.exports=router;