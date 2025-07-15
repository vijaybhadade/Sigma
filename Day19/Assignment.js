//write a javascript function that returns array elements larger than a number.
function largerNumber ()
{
let array=[3,4,64,13,65,33,76];
let larger=array[0];
for(let i=0;i<array.length;i++)
   {
       if(array[i]>larger)
       {
         larger=array[i];
       }
   }
   console.log("the largest number in array is :",larger);
}
largerNumber();


//2) write the javascript function that extract unique character from the string 
let str="abcdabcdefgggh";
console.log(str.replace("abcdabcdefgggh" ,"abcdefgh")); 

// 3)write a javascript program that accept  alist of country name as input and return the largest country name as output 

// let user =prompt("enter the name of country :");
let country=["india","china","unitated state of america","japan","america"];
let index=" ";

    for(let i=0;i<country.length;i++)
    {
        if(country[i].length > index.length )
        {
            index=country[i];
        }
    }
    console.log("the largest length of country is",index);


//4)write the javassript function that return the vowels in string.
function countVowel()
{
   let str=prompt("Enter any string that calculate the vowel in string:")
   let count=0;
   for(let i=0;i<str.length;i++)
   {
    if(str[i]=='a' || str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'|| str[i]=='A' || str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='u')
    {
        count++;
        
    }
   }
   console.log("in the string are vowels:",count);
}
countVowel();

//5)write the javascript function that genarate the random number range from (start,end)
let genarate= function (start,end)
{
    let random=Math.floor(Math.random ()*(end-start+1))+start;
    console.log(random);
}
genarate(34,55);