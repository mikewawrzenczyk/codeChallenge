/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.
*/
function invert(array) {
  //we want to return a new array with a map using the ternary function and the Math.sign method to check if the number is already positive, if it is return the unary negation of it, otherwise if it is negative also negate it (two negatives make a positive)
  return array.map(element => Math.sign(element) === 1 ? -element : -element)
}

console.log(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5])
console.log(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5])
console.log(invert([]), [])
console.log(invert([0]), [-0])