/*
Description:

Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

    If the average length is not an integer, use Math.round().
    The input array's length > 1
*/

function averageLength(array) { 
    //find length of each element in the array
    //find average by adding up length of each element of array and divide by length of original array
    //round average up
    //return new array by mapping letter in each element and then repeating for the average

    let averageInOriginalArray = Math.round(array.map(words => words.length).reduce((acc, c) => acc + c,0) / array.length)
    return array.map(element => element[0].repeat(averageInOriginalArray))

}

console.log(averageLength(['aa', 'bbb', 'cccc']))
console.log(averageLength(['aa', 'bbb', 'cccc', 'ddddddddd']))