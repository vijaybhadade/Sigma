// // 1)write a arrow function that return square of n Number. 
// let n=prompt("Enter number you want to square!");
// const square= (num)=>( console.log(num*num));
// square(Number(n));

// // 2)write a function that return "hellow vijay" 5 times at interval of 2s each 


//  let id=setInterval (()=> {
//     console.log("hello vijay");
// },2000);

// setTimeout(()=> {
//     clearInterval(id);
//     console.log("clear interval is called.");
// },10000);

// //3)write an arrow function named arrayAverage that accepted an array of numbers and return the average of those numbers
// const arrayAverage =(a,b,c)=> {
//      return (a+b+c)/3;
// }
// arrayAverage(34,56,76);

// console.log("OR");
// const arrayAverage1=(arr)=> 
// {
//     let sum=0;
//     for(let num of arr)
//     {
//      sum+=num;
//     }
//     return sum/arr.length;
// }
// console.log(arrayAverage1([34,56,76]));

//4)write an arrow function name isEven() that takes a single number as argument and return if it is even or not.
// const isEven= (num)=> {
//  return num%2===0;
// }
// console.log(isEven(35));

// 5) what is output of the following Code. 
// const object= {
//     message: "hello world",
//     logMessage() {
//         console.log(this.message);
//     }

// };
// setTimeout (object.logMessage,1000);
//  console.log(" anser is undefiend");

// 6) what are the output of the following code ? 
let length = 4;

function callBack() {
    console.log(this.length);
}

const object = {
    length: 5,
    method(callBack) {
        callBack();
    },
};

object.method(callBack, 1, 2);

 