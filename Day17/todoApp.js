//this is area where to create to do app useing only javascript
prompt("enter your request:");
let todo=[];//empty array to add our task
while(true)
{
    if(todo=="quit")
    {
        console.log("quitting todo app");
    }
    for(task of todo)
    {
        
        console.log("--------------"); console.log("--------------");
        if(task=="add")
        {
            prompt("please enter your today taks to add ")
            task.push(todo);
        }
    }
}