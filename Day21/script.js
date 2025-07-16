// this is part to array methods
console.log("1) methods forEach");
let arr=[{
    name:"vijay",
    age: 21,
    marks:97
},{
    name:"ajay",
    age: 24,
    marks:99
},{
    name:"OMkar",
    age: 24,
    marks:99
}];

 // to accept the element in array using forEach
 arr.forEach((el)=>
{
    console.log(el.name,el.age);
});

arr.forEach(function(el){
 console.log(el);
});


//this is part for the map method.

console.log("2)map method..");
let num=[1,2,3,4,5,6,7,8,9];

let double=num.map( function (el) {
    return el*2;
});

console.log("here to conver marks in cgp");
let cgp=arr.map((el)=> {
    return el.marks/10;
});
console.log(cgp);


//this is part for the filter method
console.log("3)filter methods");
let nums=[12,44,65,11,65,87,33,56,77,75,23];
let isEven=nums.filter((el)=> {
    return el % 2!=0;
});
console.log(isEven);

// This is part for the reduce method

console.log("4)reduce method.");
//here to calculate the total of nums in method 3.
let num1=[1,2,3,4];
let Total=num1.reduce((res,el)=>{
    return res+el;
} );
console.log(Total);


console.log("her find the maximum value in nums:");
let max=nums.reduce((max,el)=> {
    if(max<el)
    {
        return el;
    }
    else
    {
        return max;
    }
});
console.log("maximum value is ",max);
console.log("her find the manimum value in nums:");
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
console.log("minimum values is",min);