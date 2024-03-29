/*
make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:

multiplyAll([1, 2, 3])(2) = [2, 4, 6];

You must not mutate the original array.
*/

// function multiplyAll(array,integer) {
//     return array.map(element => element * integer)
// }

// console.log(multiplyAll([1, 2, 3],2) , [2, 4, 6])

//curry functions takes each argument as a returned function
function multiplyAll(array) {
    return function(multiplier){
            return array.map(element => element *multiplier)
    }
}

//one liner arrow function
//multiplyAll = a => x => a.map(e => e * x);



console.log( multiplyAll ([1,2,3]) (2) , [2,4,6], `multiplyAll ([ 1, 2, 3 ]) (2) `);
console.log( multiplyAll ([1,2,3]) (1) , [1,2,3], `multiplyAll ([ 1, 2, 3 ]) (1) ` );
console.log( multiplyAll ([1,2,3]) (0) , [0,0,0], `multiplyAll ([ 1, 2, 3 ]) (0) `);
console.log( multiplyAll ([]) (10) , [], `multiplyAll ([]) (10) ` );