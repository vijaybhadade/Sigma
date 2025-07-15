function demo(a,b) {
    console.log(a * b)
}
demo(3,4);

function funPoem() {
    console.log("twinkle twinkle, little start")
    console.log("how are you in today face..");
    console.log("i am here to suprice my self that can be help the other ")
}
funPoem();

// create the function that roll dice & always display the value of 1 to 6
function rollDice () {
    let random=Math.floor(Math.random() * 6)+1;
    console.log(random);
}
rollDice();

//create a function that return the average of 3 numbers
function avgNumber(a,b,c) {
   let avg=a + b + c;
   console.log( avg /3);
}
avgNumber(45,234,567);

//create a function that return multipication of a number table 
function calMulti () {
    let num=prompt("Enter any number that want to mutiplication table!");
    for(let i=1;i<=10;i++)
    {
        console.log(num*i);
    }
}
calMulti();

//create a function that return the sum of number 1 to n 
function sumNum()
{  let n= Number(prompt("Enter a number that want to sum:"));
    let sum=0;
    for(let i=1;i<=n;i++)
    {
          sum+=i;
    }
     console.log("Sum from 1 to " + n + " is: " + sum);
}
sumNum();

//this is part for the  scope.
// 1)function  and 2) block scope 
// 3)lexical scope 
function outterFun()
{
    let x=45;
    let y=56;
    function innerFun()
    {
        console.log(x)
        console.log(y);
    }
    innerFun();
}
console.log(outterFun());

// this is part for the function expression
let hellow = function (){
    console.log("this is function expression ,,,,,");
}
console.log(hellow);

// this is part for the  methods
const calculators = {
    add: function (a,b)
    {
        return a+b;
    },
    sub: function (a,b)
    {
        return a-b;
    },
    multi: function (a,b)
    {
        return a * b;
    },
    div: function (a,b)
    {
        return a/b;
    }
}

// or shorthand 
const calculate = {
    sum(a,b) {
        return a+b;
    },
    sub(a,b)
    {
        return a-b;
    }
};