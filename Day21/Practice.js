// console.log("1)check all element in array are multiplied by 10 or not");
// let arr=[12,30,50,30,10,44,405,60,660];

// let isMulti=arr.every((el)=>(el%10==0));

// console.log("Are all element divided by 10?",isMulti);

// console.log("2)create a function that find the min number in array");
// let nums=[2,43,43,55,1,545,77,567,87,6,45,87,56,88];
// let min=nums.reduce((min,el)=> {
//     if(min>el)
//     {
//         return el;
//     }
//     else
//     {
//         return min;
//     }
// });
// console.log("minimum value of array is :",min);

// console.log("short way to solve upper  problem");
// let min1 = nums.reduce((min, el) => el < min ? el : min);
// console.log(min1);

console.log("3)square and sum the array element uing arrow function them find the average of the array.");

let arr=[1,2,3,4,5,6,7,8];
let square=arr.map(n=>n*n);
let total=arr.reduce((rel,el)=> {
    return rel +el;
})
let aveg=total/arr.length;
console.log("array is",arr);
console.log("square of element in array",square);
console.log("sum of the value in array",total);
console.log("average od sqare and sum of array elements",aveg);


console.log("4)Create a new array using map function whos each elements to equal to the original element plus 5");
let arr1=[1,2,3,4,5,6,7,8];
let newArray=arr1.map( (n)=> n+5);
console.log(newArray);

console.log("5) create a new array whose element are in uppercase of words present in the original day.");