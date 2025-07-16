// this is part to array methods
console.log("1) methods forEach");
let arr=[{
    name:"vijay",
    age: 1,
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

// this is part for the default paramenters. 
console.log("Default parameters");
function func(a,b=32)
{
    console.log(a+b);
}
func(45);

console.log("this is part for the spread concept:");
let n=[12,4,344,665,2343,6565,32546,77,344,855,665,34];
let maximum=Math.max(...n);
console.log("maximum number in n array is:",maximum);
let minimum=Math.min(...n);
console.log("minimum number is n array is:",minimum);

console.log("this is part for spread (array iterals)");
// this is part for the array
let array=[23,45,654,234,534,234,64];
console.log(array);
let newArray=[...array];
console.log(newArray);

// this is part for the strings.
let name="vijay";
let surname="bhadade";
let fullName=[...name,...surname];
console.log("FullName is:",fullName);

// this is part for the add even and odd numbers.
let even=[2,4,6,8,12,14,16,24,42];
console.log("even numbers are:",even);
let odd=[1,3,7,9,13,15,11,21,35];
console.log("odd numbers are",odd);
let add=[...odd,...even];
console.log("combination of odd and even number is",add);

console.log("this is part for the spread(object literals");

const data = {
    email:"vijay@gmail.com",
    password:"vijay@132"
};

console.log(data);
console.log("here i am doing create coppy of the data & add id using spread ");
const dataCoppy= {...data,id:124};
console.log(dataCoppy);


console.log("this is part for the rest:");

function sum(...args)
{
    for(let i=0;i<args.length;i++)
    {
        console.log("you gave us",args[i]);
    }
}
sum(1,2,3,4,6,7,9,23,2)

// this is part for rest in reduce method use
function demo (...args)
{
    return args.reduce((res,el)=> res+el)
}
demo(1,2,3,4,56,5);

console.log("this is part for the destructuring: ");
let names=["tony","peter,","thor","superman","badman"];
let [winner,runnarup,secound]=names;
console.log(winner , runnarup , secound);

console.log("this is part for the destructuring(object)");
const student= {
    name:"vijay",
    age:21,
    email:"vijay@gmail.com",
    username:"vijay@123",
    password:457667,
    city:"janwal",
};
let { username:user, password:pass,city="pune"}=student;
console.log(user,pass,city);

