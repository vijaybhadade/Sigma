let btn = document.querySelector("button");
let inp = document.querySelector("input");
let body = document.querySelector("body");
let ol = document.querySelector("ol");

btn.addEventListener("click", function () {
    console.log(inp.value); // ✅ Logs the input value
    let items = document.createElement("li"); // ✅ Create a new <li>
    items.innerText = inp.value; 
        
 
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.className="delete";
    items.appendChild(delbtn);
    ol.appendChild(items);                    // ✅ Add it to <ul>
    inp.value = "";                           // ✅ Clear the input
});


ol.addEventListener("click", function (event) {
if(event.target.nodeName=="BUTTON")
{
    let listItems=event.target.parentElement;
    listItems.remove();
    console.log("deleted");
}
});

// let delBtns=document.querySelectorAll(".delete");
// for(dlebtn of delBtns)
// {
//     dlebtn.addEventListener("click", function ()
// {
//  let par=this.parentElement;
//  console.log(par);
//  par.remove();
// });
// }