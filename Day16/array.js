//students name  to store in as data

let students=["vijay","ajay","mukta","bhakti","swapnil"];
console.log(students);

//create a array
let marks=[1,2,3,4,56,67];
let name=["devindra","bhagwan","idranjit"];
let info=["aman",26,6.9]; //mixed array
let empty=[]; //empty array

console.log(marks);
console.log(name);
console.log(info);
console.log(empty);

students[0]="arjun";
students[11]="papaya";
console.log(students);


//they are following method to delete element in array
console.log(students.push("vikram")); // push for add element in array end
console.log(students.unshift("Govinda"));//shift for add element in array start
console.log(students.pop("arjun")); // to remove element in array
console.log(students);


//for example we can to one follower that block and also remove form our follower list then use following array.

let follower=['a','b','c','d','e','f','h'];
//now i want to block a name element and return also which is block then

let block=follower.shift();
console.log(block);

//to solve the practice problem .
//change array from ['january','july','march','august'] to ['july','june',''march',augast']

let start=['januvary','july','march','august'];
console.log(start.shift());
console.log(start[0]="june");
console.log(start.unshift("july"))
console.log(start);


//concate array 
let marksName=marks.concat(name);
console.log(marksName);
console.log(marksName.reverse());

//this is part of slice array
let color=["red","pink","yellow","orange","green","voilet","white"];
console.log(color.slice());
console.log(color.slice(-6));// remove the red color in this array 
console.log(color.slice(2));
console.log(color.slice(3,6));

//this is part for the splice for removes/replace/add element  splice(start,deletecound,item0,itemN)

let colors=["red","pink","yellow","orange","green","voilet","white"];

console.log(colors.splice(2));
console.log(colors.splice(2,3));
console.log(colors.splice(0,0,"red","green","orange","yellow","pink"));
console.log(colors);


//this is part for the sort method for sort an array 
let days=["monday","sunday","tuesday","wenday","friday"];
console.log(days);
console.log(days.sort());


//this is part for the practice question 

// 1)using splice change the array data and update then with add some other option 
let start1=['januvary','july','march','august'];
console.log(start1.splice(0,2,"july","june"));
console.log(start1);



// 2) find the javascript indexof afere reverse 
let language=['c','c++','javascript','python','java','c#','sql'];
console.log(language);
console.log(language.reverse())
console.log(language)
console.log(language.indexOf('javascript')); //4
console.log(language);

// or 
console.log(language.reverse().indexOf('javascript'));
console.log(language);


// this is part for array refernces
//[1]==[1]  output false 


// this is part for the nested array 
let num=[[1,2],[3,4],[5,6],[7,8]];
console.log(num);
console.log(num[2][1]);


//Practice to create tic-tac-toe using nested array
let game=[['x',null ,'O'],[null ,'x',null],['O',null ,'x']];
console.log(game);