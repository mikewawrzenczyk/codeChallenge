/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

function findShort(s){
  //split the input string into an array with each element as per a space in the string, map the new array by geting the length of each element
  const sArray = s.split(' ').map(word => word.length)
  //take string lenth mapped array and return the minimum number
  return Math.min(...sArray)
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3)
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3) 
console.log(findShort("Let's travel abroad shall we"), 2)
