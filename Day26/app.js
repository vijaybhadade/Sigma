async  function greet()
{
  //  throw "page is not found";
    return "hellow!";
}
greet().then((result)=> {
    console.log("primise is resolved..")
    console.log("the result is ",result);
})
.catch((error)=> {
    console.log("promise is rejected..");
    console.log("promise error is ",error);
})


function getNUm() {
    return new Promise((resolve,rejected)=> {
       setTimeout(()=> {
        let n=Math.floor(Math.random()*5)+1;
        if(n>3)
        {
            console.log("promise is rejected");
            rejected();
        }
         let num=Math.floor(Math.random()*10)+1;
        console.log(num);
        resolve();
       },1000)
    })
}

async function demo(){
    try 
    {
   await getNUm();
   await  getNUm();
   await getNUm();
   await getNUm();
   await getNUm();
   await getNUm();
   await getNUm();
   await getNUm();
    }
    catch(error)
    {
        console.log("error is caught",error);
    }
  let a=45;
  console.log(a);
  console.log("new number is ",a+45);

}
demo();


let h2=document.querySelector("h2");

function changeColor(Color,delay)
{
    return new Promise((resolved,rejected)=>{
     setTimeout(()=>
    {
        h2.style.color=Color;
        console.log(`color changed = ${ Color }`);
        resolved("color changed..");
    },delay);
    });
}

async function getColor()
{
  await  changeColor("red",1000);
   await changeColor("blue",1000);
   await changeColor("green",1000);
   await changeColor("black",1000);
   await changeColor("pink",1000);
   await changeColor("orange",1000);
   await changeColor("gray",1000);
    await changeColor("yellow",1000);
}

