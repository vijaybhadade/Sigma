 // returns NodeList

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



// this is part for the addlisner

let btns = document.querySelectorAll("button");

btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        console.log("button is clicked.");
    });
});
