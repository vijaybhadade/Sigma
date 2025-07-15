
// this is part for the this keyword
const demo = {
    name:"vijay",
    age:23,
    phy:78,
    ma:97,
    che:96,
    getAvg()
    {   
        console.log(this);
        let avg=(this.phy+ this.ma+ this.che)/3;
        console.log(avg);
    }
}

//this is part for the try and catch 

console.log("hellow vijay")
console.log("hellow vijay")
console.log("hellow vijay")
console.log("hellow vijay")
console.log("hellow vijay")
console.log("hellow vijay")
try {
    console.log(a);
}
catch {
    console.log("a is not defined.....");
}
finally {
    console.log("our code is successfully executed..");
}
console.log("hellow vijay")
console.log("hellow vijay")
console.log("hellow vijay")
console.log("hellow vijay")
console.log("hellow vijay")
console.log("hellow vijay")
console.log("hellow vijay")


// this is part for the arrow functions
const sum=(a,b) => {
    let result=a+b;
    console.log(`sum of the ${a} &${b} is:`,result) ;
}
sum(45,77);

// this is part for the implicit return
const mul=(b,a) =>(a*b);
mul(34,56);

//this is part for the setTimeout

console.log("this is part for the setTimeout");
console.log("i am vijay.");
setTimeout(()=> {
console.log("complet here our today taks.");
},4000);
console.log("i am studying from pune with my friends");


//this is part for the setInterval function 
console.log("set Interval function");

let id=setInterval (()=>{
console.log(" this is interval statements.");
},3000);
clearInterval(id);

// this is part for the this & arrow functions
const std={
    name:"vijay",
    age:45,
    mark:87,
    getName() {
        console.log(this);//std
        console.log(this.name);// this is parent  std
    },
    getMarkes: ()=> {
        console.log(this);// windows
        console.log(this.mark);// this is parent windows
    },
    getInfo1:function() {
     setTimeout(()=> {
        console.log(this);
        console.log("this is arrow functions");// std is parent of getinfo1.
     },3000);
    },
    getInfo2:function ()
    {
     setTimeout( function() {
        console.log(this);
        console.log("here we are using  simple  function within the function."); //window is parent of getInfo2. 
     },3000)
    },
};



