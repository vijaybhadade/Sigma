const figlet=require('figlet');

figlet("i am web vijay",function(err,data)
{
    if(err)
    {
        console.log("something went wrong");
    }
    console.log(data);
})