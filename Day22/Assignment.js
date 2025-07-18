// this is part to create h1 tag using javascript only.


let body=document.querySelector("body");
body.style.fontFamily = "Arial, sans-serif";
body.style.padding = "30px";
let h1=document.createElement("h1");
h1.innerText="DOM practicle";
h1.style.textDecoration="underline  purple";
h1.style.color="purple";
body.append(h1);


// this is part to create button tag using javascript only.
let btn=document.createElement("buttn");
btn.innerText="Click me";
btn.style.border="2px solid black" ;
btn.style.borderRadius= "30px"
btn.style.padding="8px";
btn.style.marginTop="70px"
btn.innerText="username"
btn.style.backgroundColor="blue";
btn.style.color="white";

body.append(btn);

// this is part create p tag using javascript 
let para=document.createElement('p');
para.innerHTML="Apana Collage <b> Delta </b> Practice"
body.append(para);


