//this is area where to create to do app useing only javascript
prompt("enter your request:");
let todo=[];//empty array to add our task
while(true)
{
    if(todo=="quit")
    {
        console.log("quitting todo app");
    }
    if(todo=="add")
    {
        prompt("enter your taks");
        console.log(todo);
    }
}