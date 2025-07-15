// // 1)genarate the random number between 1 to 100
// let num=Math.floor(Math.random()*100)+1;
// console.log(num);


// // 2)genarate the random number between 5 to 10
// function getValues1(max,min)
// {
//     return Math.floor( Math.random()*(max-min))+min;
// }
// console.log(getValues1(5,10));

// // 3)genarate the random number between 21 to 25 
// let num2=Math.floor(Math.random()*5)+20;
// console.log("num2="+num2);


// this is part for the guess the number which is correct return correct number 

  const correctNumber = Math.floor(Math.random() * 10) + 1;

while (true) {
    const user = prompt("Guess the number between 1 and 10 or type 'quit' to exit:");

    if (user === "quit") {
        console.log("I am quitting...");
        break;
    }

    if (parseInt(user) === correctNumber) {
        console.log("Your guess is correct! The number was", correctNumber);
        break;
    } else {
        console.log("Incorrect guess. Try again!");
    }
}