// 1) try out of events listner like:-mouseout,kaypress and load 

// let div=document.querySelector("div");
// div.addEventListener("mouseout",function()
// {
//     console.log(" i am out side of div");
// });

// let inp=document.querySelector("input");
// inp.addEventListener("keypress", function()
// {
//     console.log(inp.value);
// });

// // let box = document.querySelector('#scrollBox');
// // box.addEventListener("scroll", function () {
// //     console.log("Scrolled to Y =", box.scrollTop);
// // });

// window.addEventListener("load", (event) => {
//   console.log("page is fully loaded");
// });

//  Qs2. Create a button on the page using JavaScript. Add an event listener to the button
//  that changes the button’s color to green when it is clicked.

// let body=document.querySelector("body");

// let btn=document.createElement("button");
// btn.innerText="clicke me!";
// body.appendChild(btn);

// btn.addEventListener("click",function() {
//     btn.style.color="green";
//     btn.style.backgroundColor="blue";
// });

// 3) apply input to text on h2 
let inp=document.querySelector("input");
let h2=document.querySelector("h2");

inp.addEventListener("input", function() {
   let field=inp.value.replace(/[^a-zA-Z]/g," ");
   h2.innerText=field;
});