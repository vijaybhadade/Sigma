const mongoose=  require("mongoose");
main().then((res)=> {
    console.log("connection succesfull...");
})
.catch((err)=>{ console.log(err)});

async function main()
{   
    await mongoose.connect("mongodb://127.0.0.1:27017/Office");
}


const employeeScchema=mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        city: {
            type: String
        },
        role: {
            type: String
        },
        salary: {
            type:Number,
            min:1
        }
    }
);

const employee=mongoose.model("employee",employeeScchema);

//insert data employee

const emp1=new employee({
    name:"vijay",
    city: "pune",
    role: "junior software engineer",
    salary:56000
});

//save into db
emp1.save().then((res)=> {console.log(res)});

