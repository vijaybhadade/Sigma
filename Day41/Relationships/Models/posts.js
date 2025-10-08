const mongoose=require("mongoose");
const {Schema}=mongoose;
main()
.then(()=>{
    console.log("connection successfully...");
})
.catch((err)=>{
    console.log(err);
})

 async function main()
 {
     await mongoose.connect("mongodb://127.0.0.1:27017/RelationDemo");
 }

 const userSchema= new Schema({
    username: String,
    email: String,
 });

 //create posts Schema

const userPosts = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

 //create a models
 const User=mongoose.model("User",userSchema);
 const Post=mongoose.model("Post",userPosts);


 //add the data in  posts
//  const addData = async () => {
//   let user = await User.findOne({ username: " vijay bhadade" });

//   if (!user) {
//     console.log("User not found!");
//     return;
//   }

//   let post2 = new Post({
//     content: "Bye bye all people",
//     likes: 45,
//     user: user._id, // linking the user
//   });

//   await post2.save();

//   console.log("Data saved successfully....");
// };

// addData();


const findData=async()=>{
 let result=await Post.find({}).populate("user","username");
 console.log(result[0]);
};
findData();