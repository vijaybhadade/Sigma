let smallImg=document.getElementsByClassName("oldimg");

for(let i=0;i<smallImg.length;i++)
{
    console.log(smallImg[i]);
    console.log(smallImg[i].src);
}

let para=document.getElementsByTagName("p");
console.log(para);
console.dir(document.querySelectorAll("div a"));
console.log(para.innerText);
console.log(para.innerhtml);
console.log(para.innerContent);
// let img=document.querySelector('id');
// img.getAttribute();

console.log("this is part for the manipulating using style property");
let img=document.querySelector('img');
console.dir(img);
let Links=document.querySelectorAll('.box a');
for(let i=0;i<Links.length;i++)
{
    Links[i].style.color="darkBlue";// these are set on inline style
}

//using javascript add one paragraph in html file
let newPra=document.createElement('p');
newPra.innerText=" i am new paragraph insert using the javascript";

let box=document.querySelector('.box');
box.appendChild(newPra);

// using javascript remove one paragraph in html file
newPra.remove();
