console.log("welcome to the javascript");

//template Literate 
// let penPrice=12;
// let pencilePrice=5;
// console.log(`The total price of pencilePrice ${pencilePrice} & penPrice ${penPrice} is = ` +(penPrice+pencilePrice));

// let color=prompt("enter color name");
// if(color==="red")
// {
//     console.log("stop! light color is red");
// }
// else if(color==="yellow")
// {
//     console.log("show down! light color us yellow");
// }
// else if(color==="green"){
//     console.log(" go! light color is green");
// }
// else {
//    prompt("enter valid color");
// }

// create a system to calculate the popcorn price based on the size customer asked:

// let popcornSize=prompt("enter popcorn size: & give the price of popcorn:");
// if(popcornSize==='XL')
// {
//     console.log(`The price of ${ popcornSize} size is  = `+ 250);

// }
// else if(popcornSize==='L') 
// {
//      console.log(`The price of ${ popcornSize} size is  =  `+200);
// }
// else if (popcornSize==='M') 
// {
//     console.log(`The price of ${ popcornSize} size is  =  `+100);
// }
// else if (popcornSize==='S') 
// {
//     console.log(`The price of ${ popcornSize} size is  = `+50);
// }
// else {
//    prompt("enter valid size of popcorn");
// }


// A " good string " is a string that start with the letter 'a' & has length >3. write a program that find a string good or not.

// let str=prompt("enter a string");
// if(str[0]=='a'&& str.length>3)
// {
//     prompt("string good");
// }
// else {
//     prompt("Strinf is not good");
// }

// Predicte the output of the code 
// let num=12;
// if((num%3==0) && ((num+1==15)||(num-1==11)))
// {
//    prompt(("Safe"));
// }
// else
// {
//  prompt(("Unsafe"));   
// }



// this is part for switch 
// let color="yellow";
// switch(color)
// {
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Slow down");
//         break;
//     case "green":
//         console.log("go");
//         break;
//     default :
//         console.log("Broken Light ");
// }

// practice question for chose day using switch 
// let input=prompt("enter day number:")
// let day= parseInt(input);

// if(isNaN(day))
// {
//     alert("please enter the valid number!");
// }
// else
// {
// switch(day)
// {
//     case 1:
//          alert("Monday");
//         break;
//     case 2:
//         alert("Tuesday");
//         break;
//     case 3:
//         alert("Wednesday");
//         break;
//     case 4:
//         alert("Thursday");
//         break;
//     case 5:
//         alert("Friday");
//         break;
//     case 6:
//         alert("Saturday");
//         break;
//     case 7:
//         alert("Sunday");
//         break;
//     default: 
//         alert("you are choosing wrong number:");
// }
// }

// other ways to solve the problem 

let day;

while (true) {
    let input = prompt("Enter a day number (1 to 7):");
    day = parseInt(input);

    // Check if input is a number and in valid range
    if (!isNaN(day) && day >= 1 && day <= 7) {
        break; // valid input, exit loop
    } else {
        alert("❌ Invalid input! Please enter a number from 1 to 7.");
    }
}

switch (day) {
    case 1:
        alert("✅ You chose Monday");
        break;
    case 2:
        alert("✅ You chose Tuesday");
        break;
    case 3:
        alert("✅ You chose Wednesday");
        break;
    case 4:
        alert("✅ You chose Thursday");
        break;
    case 5:
        alert("✅ You chose Friday");
        break;
    case 6:
        alert("✅ You chose Saturday");
        break;
    case 7:
        alert("✅ You chose Sunday");
}
