console.log("this is string methods ");
// let msg=" jello ";
// console.log(msg.trim());
// console.log(msg.toUpperCase());
// console.log(msg.toLowerCase());

// here to apply multiple things on one string (method chain)

let str="  vijay   bhadade";
let newStr=str.toUpperCase().trim();
console.log(newStr);

//slice method
console.log("slice(4)"+str.slice(4));
console.log("slice(1,4)"+str.slice(1,4));
console.log("slice(4)"+str.slice(-3));//str.lenth-num => 9-3

//to replace with old value to new value 
let chat="iLoveToPlay";
console.log(chat.replace("i","We"));

//to repeat a string in the code 
let fruit="mango";
console.log(fruit.repeat(4));

//practice question to string methods:
// 1) to trim and to conver into toUpperCase 
let msg="help!";
console.log(msg.trim().toUpperCase());

// 2)predicet the output of the given problem. string is "apanacollage" 

let name="apanacollage";
console.log(name.slice(4,9));//acoll
console.log(name.indexOf("na")); // 3
console.log(name.replace("apana","our"));//ourcollage
console.log(name.slice(4).replace('l','t'));  //apanacotlage