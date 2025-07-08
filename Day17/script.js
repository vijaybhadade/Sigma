// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");
// console.log("7");
// console.log("8");

// this is part for loop 
// let n=parseInt(prompt("enter any numer:"));
// for (let i=1;i<=10;i++)
// {
//     console.log(n*i);
// }

// this is part for the nested loop 
// for(let i=1;i<=3;i++)
// {
//     for(let j=1;j<=3;j++)
//     {
//         console.log(j);
//     }
// }

// this is part for the while loop 

// let i=5;
// while(i<=15)
// {
//     console.log(i);
//     i++;
// }




// break keyword 

// let i=1;
// while(i<=5)
// {
//     if(i==3)
//     {
//         break;
//     }
//     console.log(i);
//     i++;
// }


//create game to guease the name of movie  
// let movie=prompt("choice the correct movie name");

// while(movie=="avtar")
// {
//     alert("you are select the correct movie ");
//     movie++;
// }

// const favMovie ='avatar';
// let guess = prompt ("guess my favorite movie");
// while(guess!=favMovie)
// {
//     if(guess=="quit")
//     {
//         console.log("you are quit..");
//         break;
//     }
//     guess=prompt("wrong guess, please try again ");

// }
// if(guess==favMovie)
// {
//     console.log("congrats..");
// }


// this is part for the nested array 
let heroes=[["ironman","spiderman","thor"],["superman","wonder woman","flash"]];

for(let i=0;i<heroes.length;i++)
{
    console.log(i,heroes[i],heroes[i].length);
    for(let j=0;j<heroes[i].length;j++)
    {
        console.log(`j= ${ j}  ${heroes[i][j]}`);
    }
}


//student info 
let student=[["vijay",9],["ajay",90],["vishal",67],["dinesh",77],["aniket",87]];

for(let i=0;i<student.length;i++)
{
    console.log(`Student info is #${i}`);
    for(let j=0;j<student[i].length;j++)
    {
        console.log(student[i][j]);
    }
}


// this  is part for for of loop.
let marks=[23,55,66,76,89,21,44];
console.log("all following values are copy from marks");
for(value of marks)
{
    
    console.log(value);
}

// this is part for the nested for of loop 
let fruits=[["mango","apple","orange"],["banana","liche","papaya"],["dragan","chocanat"]];
console.log("this is list of the fruits:");
for(fruit of fruits)
{
    for(list of fruit)
    {
        console.log(list);
    }
}