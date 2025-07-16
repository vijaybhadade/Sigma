console.log("1)check all element in array are multiplied by 10 or not");
let arr=[12,30,50,30,10,44,405,60,660];

let isMulti=arr.every((el)=>(el%10==0));

console.log("Are all element divided by 10?",isMulti);

console.log("2)create a function that find the min number in array");
let nums=[2,43,43,55,1,545,77,567,87,6,45,87,56,88];
let min=nums.reduce((min,el)=> {
    if(min>el)
    {
        return el;
    }
    else
    {
        return min;
    }
});
console.log("minimum value of array is :",min);

console.log("short way to solve upper  problem");
let min1 = nums.reduce((min, el) => el < min ? el : min);
console.log(min1);