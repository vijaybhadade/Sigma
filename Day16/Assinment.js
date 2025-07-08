// Q1.write the javascript program to get the first n element of an array 

let array=[7.9,0,-2];
let n=3;
let ans=array.slice(0,n);
console.log(ans);


// Q2)Write the javascript program to get the last n element of an array. 

let array1=[7.9,0,-2];
let n1=3;
let anser=array1.slice(array1.length-1);
console.log(anser);


// Q3)Write a javascript program to check whether a string is black or not 
let str=prompt("enter a string:");

if(str.length==0)
{
    console.log("string is empty");
}
else {
    console.log("string is not empty");
}

//Q4. wirte a javscript progran to checheck weather charecter at the given (charecter ) index is lower or not 

let str2="apancollage";
let idx=   3;
if(str2[idx]==str2[idx].toLowerCase)
{
    console.log("cherecter is lowercase");
}
else
{
    console.log("cherecter is not lowercase");
}

// Q5) write the javascript program to strip leading and training space from a string 

let str3=prompt("enter a string");
console.log(`original string ${str3}`);
console.log(`string without space ${str3.trim()}`)


// Q6)write a javascript program to check the if element exist in array or not
let arr4=["hellow",'i',56,66,77];
let items=78;
if(arr4.indexOf(items) !=-1)
{
    console.log("element exist in array:")
}
else
{
    console.log("element not exist in array:")
}