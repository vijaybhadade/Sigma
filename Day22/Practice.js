

let div=document.createElement("div");
div.style.border="2px solid black";
div.style.backgroundColor="pink";
let para2=document.createElement('p');
para2.innerText="Me too";
let h2=document.createElement('h2');
h2.innerText=" i'm in div";
document.querySelector('body').appendChild(div);
div.appendChild(h2);
div.appendChild(para2)

let h3=document.createElement("h3");
h3.innerText="i'm blue h3!!";
h3.style.color="blue";
document.querySelector('body').appendChild(h3);

let para1=document.createElement("p");
para1.innerText="i'm red.";
para1.style.color="red";
document.querySelector('body').append(para1);