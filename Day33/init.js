//this iis page for inheritance concept in js 

class person{
    constructor(name,age){

        this.name=name;
        this.age=age;
    }
}

class student extends person{
    constructor(name,age,rollno){
        super(name,age); //calling parent class constructor
        this.rollno=rollno;
    }

    display(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Roll No: ${this.rollno}`);
    }
}

class teacher extends person{
    constructor(name,age,subject)
    {
        super(name,age);
        this.subject=subject;
    }
}
let t1= new teacher("vijay",34,"maths");
let s1= new student("sai",20,101);
s1.display();
console.log(`Name: ${t1.name}, Age: ${t1.age}, Subject:
    ${t1.subject}`);
    