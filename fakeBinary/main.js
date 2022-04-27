/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/
function fakeBin(x){
  //we split the string into an array by no spaces for each element, then we map each element and check using a conditional ternary operator if the Numerized element is greater than or equal to 5 we return a string of 1 otherwise 0, then we join the array back by no spaces into a string. Thus replacing each character in this version of the string.
  return x.split('').map(element => Number(element) >= 5 ? '1' : '0').join('')
}

console.log(fakeBin('45385593107843568'), '01011110001100111')
console.log(fakeBin('509321967506747'), '101000111101101') 
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011')