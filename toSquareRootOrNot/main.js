/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.
Example

[4,3,9,7,2,1] -> [2,9,3,49,4,1]

Notes

The input array will always contain only positive numbers, and will never be empty or null.

*/

function squareOrSquareRoot(array) {
  //retun a mapped array with a function conditional asking if the sqrt of each element is an integer return the square root, otherwise square the element.
  return array.map(item => {
    if(Number.isInteger(Math.sqrt(item))){ 
     return Math.sqrt(item)
    }
    else return item **2
  })  
}

var input = [ 4, 3, 9, 7, 2, 1 ];
var expected = [ 2, 9, 3, 49, 4, 1 ];
console.log(squareOrSquareRoot(input), expected);

input = [ 100, 101, 5, 5, 1, 1 ];
expected = [ 10, 10201, 25, 25, 1, 1 ];
console.log(squareOrSquareRoot(input), expected);

input = [ 1, 2, 3, 4, 5, 6 ];
expected = [ 1, 4, 9, 2, 25, 36 ];
console.log(squareOrSquareRoot(input), expected);