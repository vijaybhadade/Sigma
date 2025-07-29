let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
    let fact = await getImage();
    let img = document.querySelector("#fact");
    img.setAttribute("src", fact); // Corrected line
});

async function getImage() {
    try {
        let btn = await axios.get(url2);
        return btn.data.message;
    } catch (e) {
        console.log("ERROR---", e);
        return "NO IMAGE FOUND!";
    }
}





// this is part for the cat api 
// let url="https://catfact.ninja/fact";
// btn.addEventListener("click", async ()=> {
//    let fact= await getFacts();
// //    console.log(fact);
//    let p=document.querySelector("#fact");
//    p.innerText=fact;
// });

// async function  getFacts() {
//     try{
//       btn  =await axios.get(url);
//         return btn.data.fact;
//     }
//     catch(e)
//     {
//         console.log("ERROR---",e);
//         return "NO FACT FOUND!";
//     }
// }


