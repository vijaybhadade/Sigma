const mongoose=require("mongoose");
main().then((res)=>{console.log("connection successful...")})
.catch((err)=>{console.log(err)});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema=new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        discount:0
    },
    category: {
        type: String,
        enum:["fiction","non-fiction","comics","biography","self-help"]
    }
});

const Book=mongoose.model("Book",bookSchema);
//update 
Book.findByIdAndUpdate({_id:"68b7f1554a5c198a8b572121"},{price:-50}).then((res)=>{console.log(res)});


// const book1=new Book({
//     title:" deep work",
//     author:"cal newport",
//     price:799,
//     category:"self-help"
// });

// const book2=new Book({
//     title:"bhagavad gita",
//     author:"ved vyas",
//     price:299,
//     category:"non-fiction"
// });

// const book3=new Book({
//     title:"i am vijay",
//     author:"vijay",
//     price:599,
//     category:"biography"
// });



//save all the books lists
// book1.save();
// book2.save();
// book3.save();

//fetch all the books
Book.find().then((res)=>{
    console.log(res);
});