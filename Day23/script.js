// let btns=document.querySelector("button");

// for (let btn of btns) {
//     btn.onclick = sayHello;

//     // ✅ Correct way: assign a function, not the result of console.dir
//     btn.onmouseenter = function () {
//         console.dir(btn);
//     };
// }

// function sayHello() {
//     console.log("hello");
// }



// // this is part for the addlisner

// let btns1 = document.querySelectorAll("button");

// btns1.forEach(function (btn) {
//     btn.addEventListener("click", function () {
//         console.log("button is clicked.");
//     });
// });


// let para=document.querySelector('p');
// para.addEventListener("click",function () {
//     console.log("button is clicked..");
// });

// let div=document.querySelector(".box");
// div.addEventListener("mouseenter", function() {
//     console.log("mouse inside a box..");
// });


// // this is part moving our charecter using KeyboardEvent 
// let inp=document.querySelector("input");
// inp.addEventListener("keydown", function(event) {
//  console.log("code=",event.code);


// if(event.code=="ArrowUP")
//     {
//         console.log("charecter move forward..");
//     } 
// else if(event.code=="ArrowDown")
//     {
//         console.log("charecter move backward..");
//     } 
//     else if(event.code=="ArrowLeft")
//     {
//         console.log("charecter move left side..");
//     } else if(event.code=="ArrowRight")
//     {
//         console.log("charecter move right side..");
//     } 
// });


let form =document.querySelector("form");

form.addEventListener ("submit", function(event)
{  
    event.preventDefault();
    // let user=document.querySelector("#user");
    // let pass=document.querySelector("#pass");
                 //  or 
    //              let user=this.elements[0];
    //              let pass=this.elements[1];
    // console.dir(user);
    // console.log(user.value);
    // console.log(user.value);

    // alert(
    //     ` HI${ user.value},this  is set to your password ${pass.value}`
    // );
});

// let user=document.querySelector("#user");
// let pass=document.querySelector("#pass");
// user.addEventListener("change", function()
// {
//     console.log("change event");
//     console.log("final value=",this.value);
// });

// user.addEventListener("input", function()
// {
//     console.log("input event");
//     console.log("final value=",this.value);
// });

let inp=document.querySelector("input");
let p=document.querySelector("p");

inp.addEventListener("input", function() {
    console.log(inp.value);
    p.innerText=inp.value;
})