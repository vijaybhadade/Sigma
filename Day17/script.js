
let todo=[];
let req=prompt("enter your request");
while(true)
{
    if(req== "quit" )
    {
        console.log("you are quiting todo app.");
        break;
    }

    if(req=="list")
    {
        console.log("------------------");
       for(let i=0;i<todo.length;i++)
       
        {
            console.log(i,todo[i]);
        }

        console.log("--------------");

    }
    else if(req=="add")
    {
        let task =prompt("Enter your taks that you want to add in lists.");
        todo.push(task);
        console.log("task added in the todo");
    }
    re=prompt("Please Enter your request");
}