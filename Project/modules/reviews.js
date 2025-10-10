const mongoose = require("mongoose");
const Schema= mongoose.Schema;

//create review schema
const reviewSchema= new Schema({
   comment: String,
   rating:{
    type: Number,
    min:1,
    max:5,
   },
   createdAt:{
    type:Date,
    default:Date.now(),
   },
});

//modules explore
module.exports=mongoose.model("Review",reviewSchema);