/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

function getMiddle(s)
{
  //split string into array
  let arrayString = s.split('')
  //check if the length of the string / array is odd
  let length = arrayString.length % 2
  //find position
  let position =  arrayString.length / 2
  // console.log(position)
//if the array is even give return the middle digit - 1 and then the middle digit.
if(length === 0)
  return `${arrayString[position-1]}${arrayString[position]}`
else
//if it odd  return the middle position - 1 to grab the middle
  return `${arrayString[Math.round(position-1)]}`
}

/*
Simple one liner
  return s.slice((s.length-1)/2, s.length/2+1);

*/

console.log(getMiddle("test"),"es");
console.log(getMiddle("testing"),"t");
console.log(getMiddle("middle"),"dd");
console.log(getMiddle("A"),"A");