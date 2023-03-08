/*
You are given a number "n" (n >= 0) and a digit "d" (0 <= d <= 9).

Write a function nbDig(n, d) that finds the square of each integer from 0 to n, and returns the number of times that the digit d appears across all the squares. Note that d might appear multiple times in a single square.

Example:

n=12, d=1
Squares from 0 to n=12: 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144
The function returns 7 because the digit d=1 appears 7 times: in 1, 16, 81, 100, 121 (note: 1 appears twice in 121), and 144.

n=10, d=0
Squares from 0 to n=10: 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
The function returns 3 because the digit d=0 appears 3 times: in 0 and 100 (note: 0 appears twice in 100).

*/

function nbDig(n, d) {
    let counterOfD=0
    for (let g=0;g<=n;g++){
      //square the current count in the for loop, split it into an array
      let square=(g*g+"").split("")
      //go through each element of array, check to see if each element is equal to d with a ternary, if so increase 
      square.forEach((element)=>element==d?counterOfD++:null)
    }return counterOfD
}

console.log(nbDig( 5750, 0),  4700, "n = 5750, d = 0");
console.log(nbDig(11011, 2),  9481, "n = 11011, d = 2");
console.log(nbDig(12224, 8),  7733, "n = 12224, d = 8");
console.log(nbDig(11549, 1), 11905, "n = 11549, d = 1");
