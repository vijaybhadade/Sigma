
let btn=document.querySelector("button");
btn.addEventListener("click",function () {
    let h2=document.querySelector("h2");
    let randomColor=getRandomColor();
    h2.innerText=randomColor;
   
    let randomColor1=getRandomColor();
   let div1 = document.querySelector("div");
    div1.style.backgroundColor = randomColor1;


    console.log("color updated..",randomColor);
});

function getRandomColor() {
   let red=Math.floor(Math.random() * 256);
   let green=Math.floor(Math.random() *256);
   let blue=Math.floor(Math.random()*256);
   
   let color=`rgb(${red} , ${green}, ${blue})`;
   return color;
}



