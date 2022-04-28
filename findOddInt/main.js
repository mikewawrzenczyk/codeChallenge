/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/
function findOdd(A) {
  //take each value of the integer and find duplicates
  //count the number of times each duplicate appears
  //check to see if each set appears an odd number of times
  //we reduce the array by counting how many times  an element appears. we use .set to add an object and .get to pull a value, we setup new Map as the full object.
  //sets becomes an object with key value pairs, the key being the element that appears and the value of how many times it appear.
  const sets = A.reduce((acc, c) => acc.set(c, (acc.get(c) || 0) +1 ), new Map())
  //we now iterate throught the object called sets and have a conditional looking for a value that is odd, we return it.
  for(let [key,value] of sets.entries()){
    if(value % 2 !== 0) return key
  }
}
//one liner solution
//const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5)
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]), -1)
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]), 5)
console.log(findOdd([10]), 10)
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]), 10)
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]), 1)