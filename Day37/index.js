const mongoose=require("mongoose");
//create connection
main().then((res)=>{
    console.log("connection successful...");
})
.catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//create a schema
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

//create a connection
const User=mongoose.model("User",userSchema);
// const Empolyee=mongoose.model("Employee",userSchema);

// //insert data usin insertOne
// const user1=new User({name:"vijay",email:"vijay@123",age:23});
// const user2=new User({name:"ajay",email:"ajay@124",age:25});
// const user3=new User({name:"vikash",email:"vikash@1343",age:24});

//save into database
// user1.save().then((res)=> 
//     {console.log("user1 is succefulling inserting in database")}) 
//     .catch((err)=>{console.log("error:",err)});

// user2.save().then((res)=> 
//     {console.log("user2 is succefulling inserting in database")}) 
//     .catch((err)=>{console.log("error:",err)})

// user3.save().then((res)=> 
//     {console.log("user3 is succefulling inserting in database")}) 
//     .catch((err)=>{console.log("error:",err)});


//find all users  from User
// User.find().then((res)=> {console.log(res)});

//find the users which are age greater than equal to  24
// User.find({age:{$gte: 24}}).then((data)=> { console.log("these are user age greater:",data)});

//find user by findOne() return single user
// User.findOne({age:25}).then((res)=> { console.log(res)});

//find user by findById(number) return user (commonly used)
// User.findById("68b56fa7f06cabdc66add542").then(res=>{ console.log(res)});   


//delete user by specific condition
// User.deleteMany({age:{$gt: 45}}).then((res)=>{ console.log(res)});
// User.find().then((res)=> { console.log(res)});

//delete user by id and findbyid
// User.findByIdAndDelete("68b56f6f61464f5a4ca194c4").then((res)=>{ console.log(res)});
User.findOneAndDelete({age:24}).then((res)=>{ console.log(res)});

