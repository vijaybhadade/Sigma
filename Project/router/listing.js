const express=require("express");
const router=express.Router();
const wrapAsync=require("../util/wrapAsync.js");
const ExpressError=require("../util/ExpressError.js");
const { listingSchema } = require("../schema");
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
  req.flash("success"," this is new route...");
  res.render("listings/new.ejs");
});

//Show Route
router.get("/:id",  wrapAsync (async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate('reviews');
  if(!listing)
  {
    req.flash("error","Listing you requested does not exist");
    res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
}));

//Create Route
router.post("/",validateListing, wrapAsync(async (req, res) => {
    const newListing = new Listing(req.validatedBody.listing);
    await newListing.save();    
    req.flash("success","New listings created successfully...");
    console.log(newListing, "new listings add");
    res.redirect("/listings");
}));


//Edit Route
router.get("/:id/edit", wrapAsync( async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
   if(!listing)
  {
    req.flash("error","Listing you requested does not exist");
    res.redirect("/listings");
  }
  req.flash("success"," Listings Edited...");
  res.render("listings/edit.ejs", { listing });
}));



//Update Route
router.put("/:id", validateListing,wrapAsync( async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, {...req.body.listing });
  req.flash("success"," Listings updated...");
  res.redirect(`/listings/${id}`);
}));

//Delete Route
router.delete("/:id",wrapAsync( async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success"," Listings  deleted...")
  res.redirect("/listings");
}));





module.exports=router;