const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../util/wrapAsync.js");
const ExpressError=require("../util/ExpressError.js");
const {reviewSchema }=require("../schema");
const Review= require("../modules/reviews.js");
const Listing = require("../modules/listing.js"); 


//validation schema for review
const validateReview = (req, res, next) => {
  const { value, error } = reviewSchema.validate(req.body);
  if (error) {
    const errMsg = error.details.map(el => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  } else {
    req.validatedBody = value; // validated review data
    next();
  }
};



//review post route
router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) throw new ExpressError(404, "Listing not found");

    const newReview = new Review(req.validatedBody.review); // use validatedBody
    await newReview.save();

    listing.reviews.push(newReview._id); // push only the review _id
    await listing.save();
    req.flash("success"," Reviews created...");
    res.redirect(`/listings/${listing._id}`);
  })
);

//Delete Review route 
router.delete("/:reviewId",  wrapAsync (async (req,res)=>{
let {id,reviewId}= req.params;

await Listing.findByIdAndUpdate(id,{$pull: { reviews:reviewId}});
await Review.findByIdAndDelete(reviewId);
req.flash("success"," Reviews deleted...");
res.redirect(`/listings/${id}`);
}));

module.exports=router;