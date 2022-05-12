/*
Summation

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

*/
var summation = function (num) {
  //declare an empty array, use a for loop to populate array with numbers from 1 to num
  let numArray = []
  for(let i=0; i<num;i++)
    numArray[i] = i+1
  //return a reduce method of the array using an accumulator to add each element together.
  return numArray.reduce((acc,c) => acc +c)
}

console.log(summation(1), 1)
console.log(summation(8), 36)