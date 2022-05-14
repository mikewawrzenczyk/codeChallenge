/*
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
Examples

Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398
Assumptions

    You can assume that you are only given numbers.
    You cannot assume the size of the array.
    You can assume that you do get an array and if the array is empty, return 0.

What We're Testing

We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.

P: array of numbers negative or non integer. If no numbers return 0. only given numbers. array length not defined. always an array
R: no numbers return 0, sum array
E: below
P: 
*/

// Sum Numbers
function sum (numbers) {
  "use strict";
  //ternary conditional operator checking to see if the array is empty, if it isn't take the numbers array and reduce it my using an accumulator to sum each value. You don't care if it's negative or a decmial etc.
  return (numbers.length != 0 ? numbers.reduce((acc,c) => acc+c) : 0)
  
  
};
console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);