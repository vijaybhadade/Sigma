// this is Factory function 
// const PersonMarker=(name,age) => {
//     const person={
//         name:name,
//         age:age,
//         sayHellow()
//         {
//             console.log(`Hellow i am $ {this.name} and my age is $ {age}`);
//         }
//     }
//     return person;
// }

// this is constructor -does not have return and start with capital letter
// function person(name,age)
// {
//     this.name=name;
//     this.age=age;
// }


// let p1=new person("vijay",45);
// console.log(p1);


//All upper side  code running using class 
class person{
    constructor(name,number)
    {
        this.name=name;
        this.number=number;

    }
    talk()
    {
        console.log(`Hellow i am ${this.name} and my number is ${this.number} `);
    }
}

let s1= new person("virat",18);
let s2= new person("Rohit",45);
let s3= new person("Dhoni",7);
let s4= new person("Suray",83);
let s5= new person("KL Rahul",3);
let s6= new person("Bumbra",66);
let s7= new person("iyer",25);
let s8=new person("Hardik",30);
let s9=new person("Rishabh",22);
let s10=new person("Ashwin",35);
let s11=new person("Jadeja",28);

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);
console.log(s6);
console.log(s7);
console.log(s8);
console.log(s9);
console.log(s10);
console.log(s11);
s1.talk();
// console.log(s1.name)