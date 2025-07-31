
console.log("this is part for the dog api");
// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () => {
//     let fact = await getImage();
//     let img = document.querySelector("#fact");
//     img.setAttribute("src", fact); // Corrected line
// });

// async function getImage() {
//     try {
//         let btn = await axios.get(url2);
//         return btn.data.message;
//     } catch (e) {
//         console.log("ERROR---", e);
//         return "NO IMAGE FOUND!";
//     }
// }





console.log("this is part for the cat api ");
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


console.log("this is part for sending header to url");

let url="https://icanhazdadjoke.com";

async function getJockes()
{
    try{
     const config={headers: {
        accept: "application/json"
     }};
      let jock=await axios.get(url,config);
      console.log(jock.data);
    }
    catch(e)
    {
        console.log("ERROR---",e);
    }
}
console.log("this is part for the updating query string");

    let url3 = "http://universities.hipolabs.com/search?name=";
    let btn = document.querySelector("#btnInp");

    btn.addEventListener("click", async () => {
      let country = document.querySelector("input").value.trim();
      console.log("Country:", country);

      let colleges = await getColleges(country);
      show(colleges);
    });

    async function getColleges(country) {
      try {
        let data = await axios.get(url3 + country);
        return data.data;
      } catch (e) {
        console.log("No data found for:", country);
        return [];
      }
    }

    function show(colleges) {
      let list = document.querySelector(".list");
      list.innerHTML = ""; // Clear old results

      if (colleges.length === 0) {
        list.innerHTML = "<li>No colleges found</li>";
        return;
      }

      for (let col of colleges) {
        let li = document.createElement("li"); // ✅ Create new <li>
        li.innerText = col.name;
        list.appendChild(li);
      }
    }-