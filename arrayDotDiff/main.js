/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/
function arrayDiff(a, b) {
  //P list of values, only getting arrays, or empty arrays or lists
  //R return array with values that are not both present in each list
  //E examples below
  //Psuedo Code
  //Filter all values of list B out of List A using an !array.includes method
  //this should return a new string with only values that are not included in B
  //we are using a filter method to filter out each item that is NOT included in the B array.

  return a.filter(function(item) {
    return !b.includes(item); 
  })
  // console.log(a)
  // b = b.filter(function(item) {
  //   return !a.includes(item); 
  // })
  // console.log(b)
  // return [...a, ...b]
  // return a
}

console.log(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
console.log(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
console.log(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
console.log(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
console.log(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
console.log(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")