//this is part for object literales 

const  students={
    name: "vijay",
    gender: "male",
    roll:  9,
    education:"graduction"
};

const items= {
    price: 87.98,
    discount:1.7,
    colors: ["red","pink","orange","blue"]
};
console.log(items);
console.log(students);


// this is part for the create theads / twitter post  using 
// username content tags like reports 

const post= {
    username:"@bhadadevijay",
    contents: "this is my #first post",
    likes: 250,
    reports:45,
    tags: ["@mrkale","@mr.bhutane","@mr.chande"]
};
console.log(post);

// this is to get values from the post 
console.log(post.tags);
console.log(post["likes"]);

// this is part for the Add_update and delete form existing data 
const info ={
    name1:"devindra",
    address:"goa",
    dis:"latur",
    tq:"chakur",
    pincode:413512
};
console.log(info);

//this is part for the nested objects

const classInfo = {
    aman: {
        rollNO:34,
        name:"aman",
        age:45,
        place:"latur"
    },
     jagadish: {
        rollNO:31,
        name:"jagadish",
        age:42,
        place:"pune"
    }
};

//Array of Objects

const classINfo = [
     {
     name:"tukaram",
    age:15,
    city:"pune"    
    },
     {
     name:"vijay",
    age:21,
    city:"USA"    
    },
     {
     name:"omkar",
    age:25,
    city:"mumbai"    
    },

 ]

 // this is part for the math object
 
//these are following properties
console.log(Math.PI);
console.log(Math.E);

//these are following methods
console.log(Math.abs(-5));//return 5
console.log(Math.abs(5)); //return 5
console.log(Math.pow(5,2));//return 5**2
console.log(Math.floor(9.9999));// compare and return smallest value
console.log(Math.ceil(-5.77777)); // compare value and return largest value
console.log(Math.random(1,100));  // to genarate the random value everytime


// here to learn how to genarate the random interger number using random method
// this is print the 1 to 100
let num=Math.floor(Math.random()*10)+1;
console.log(num);

// to print the 5 to 50
function getValues(min,max)
{
    return Math.floor(Math.random()* (max-min+1))+min;

}
getValues(5,15);

// to genarate the opt
let otp=getValues(100,999);
console.log("otp is given :",otp);
console.log("otp is given :",otp);
console.log("otp is given :",otp);