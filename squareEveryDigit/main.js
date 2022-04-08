/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/
function squareDigits(num){
  // //turn the integer into a string
  // const numToString = '' + num
  // //split the new string into an array
  // const numArray = numToString.split('')
  // //get a new array using map and squaring each element
  // const squaredArray = numArray.map(number => { return Math.pow(number,2)})
  // //return the new array joined as a string but turned back into an integer with Number
  // return Number(squaredArray.join(''))
  
  //writing it out as one line below
  return Number((num + '').split('').map(number =>{ return Math.pow(number,2)}).join(''))
}

console.log(squareDigits(3212), 9414)
console.log(squareDigits(2112), 4114)
console.log(squareDigits(0), 0)