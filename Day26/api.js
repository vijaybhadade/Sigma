// console.log("here we are learning about json");

// //this is part converting json code into javascript object

// let jsonRes='{"fact":"In ancient Egypt, mummies were made of cats, and embalmed mice were placed with them in their tombs. In one ancient city, over 300,000 cat mummies were found.","length":158}';

// let valid=JSON.parse(jsonRes);
// console.log(valid);
// console.log(valid.fact);

// //this is part to string convert into api (json code)

// let student={
//     name:"vijay",
//     age:23,
//     education:"graduate",
//     hobbies:'["coding" , "singing" , "dancing" , "math problem solve"]',
// }

// let jsonCode=JSON.stringify(student);

// let parse=JSON.parse(jsonCode);
// console.log(jsonCode);
// console.log(parse.age);

console.log("this is part for learn feaching ");

// let url="https://catfact.ninja/fact";
// fetch(url).then((response)=> {
//     console.log(response );
//     return response.json();
// })
// .then((data)=> {
//     console.log(data);
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=> {
//     console.log(data2);
//     console.log(data2.fact);
// })
// .catch((error)=> {
//     console.log("ERROR---",error);
// })


console.log("this is part for the fetch with async function ");
 let url="https://catfact.ninja/fact";
 async function demo ()
 {
   try{
    let res=await fetch(url);
    let data= await res.json();
    console.log(data.fact);

    let res2=await fetch(url);
    let data2= await res2.json();
    console.log(data2.fact);

    let res3=await fetch(url);
    let data3= await res3.json();
    console.log(data3.fact);

    let res4=await fetch(url);
    let data4= await res4.json();
    console.log(data4.fact);

    let res5=await fetch(url);
    let data5= await res5.json();
    console.log(data5.fact);

    let res6=await fetch(url);
    let data6= await res6.json();
    console.log(data6.fact);

    let res7=await fetch(url);
    let data7= await res.json();
    console.log(data7.fact);
   }
   catch (error){
    console.log("ERROR--",error);
   }
 }
 demo();