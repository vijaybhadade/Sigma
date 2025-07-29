// function one() {
//     return 1;
// }
//  function two()
//  {
//     return one() + one();
//  }

//  function three()
//  {
//     let ans= two() + one ();
//     console.log(ans);
//  }
//  three();

// this is part for the callback hell 

h3=document.querySelector("h3");


// this is part for the use separate function
// setTimeout( function () {
//     h3.style.color="green";
// },1000);

// setTimeout( function () {
//     h3.style.color="orange";
// },2000);
// setTimeout( function () {
//     h3.style.color="pink";
// },3000);


// this is part for the one function for all color set
function changeColor(color,delay,nextColor)
{
setTimeout(()=> {
    h3.style.color=color;
    nextColor();
},delay);
}


// this is callback nesting 
changeColor("red",1000,()=> {
   changeColor("orange",2000,() => {
    changeColor("yellow",3000 ,()=> {
    changeColor("pink",4000,()=> {
        changeColor("blue",5000,() => {
            changeColor("black",6000, ()=> {
              changeColor("darkgreen",7000);   
            });
        });
    });
    });
   });
})



// changeColor("red",1000);
// changeColor("orange",2000);
// changeColor("yellow",3000);
// changeColor("pink",4000);
// changeColor("blue",5000);
// changeColor("black",6000);
// changeColor("darkgreen",7000);




// this is part for the create promises

// function oracleDB(data,success,failure)
// {
//     let internet=Math.floor(Math.random()*10)+1;
//     if(internet > 4)
//     {
//         success();
//     }
//     else {
//        failure();
//     }
// }

// oracleDB("vijay",()=> {
//     console.log(" success:your data  was saved");
//     oracleDB("hellow",()=> {
//         console.log("success2: data 2 is saved..");
//         oracleDB("demos",()=> {
//             console.log("success3:data 3 is ")
//         },() => {
//             console.log("failure3:  connection is weak ");
//         })
//     }, ()=> {
//         console.log("weak connection2.");
//     })
// },()=> {
//  console.log(" failure:week connections");
// })

console.log("uper side code executed using promises");

function oracleDB(data)
{
    return new Promise((resolve,reject)=>{
       let internet= Math.floor(Math.random()*10)+1;
       if(internet > 4)
       {
        resolve(" data was saved");
       }
       else
       {
        reject("data was not saved.");
       }
    })
    
}





// this is part for thr try and catch in this oracleDB is promise object 

oracleDB("vijay").then(()=> {
    console.log("promise was solved...");
     return oracleDB("hello vijay");// this is part execute after sedunally 
})
.then(()=> {
        console.log("data 2 was saved...");
        return oracleDB("data3");
    })
    .then(()=> {
        console.log("data3 was saved....");
         return oracleDB("data4");
    })
    .then(()=> {
        console.log("data 4 was saved...");
    })
.catch(()=> {
    console.log(" some promises was rejected...");
})

// this is part for the promise chaning 

