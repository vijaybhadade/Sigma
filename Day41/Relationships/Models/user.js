const mongoose=require("mongoose");
const {Schema}=mongoose;
main()
.then(()=>{
    console.log("connection successful..");
})
.catch((err)=>{
    console.log(err);
})

async function main()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/RelationDemo");
}

//create a schema
const userSchema= new Schema({
    username: String,
    addresses:[
        {
         location: String,
         city: String,
        }
    ]
});

//create model
const User=mongoose.model("User",userSchema);

//add users
const addUser=async()=>{
    let user1= new User({
        username: "vijay",
        addresses:[
            {
                location: "morya heights",
                city: "pune"
            },
            {
                location:"at post janwal ",
                city: "janwal"
            },
            {
                location:"mandale nager, gula market",
                city: "latur"
            }
        ]
    })
    user1.addresses.push({location:"P23 bank of maharastra", city: "mumbai"});
    let result=await user1.save();
    console.log(result);    
}

//call user stores in database
addUser();