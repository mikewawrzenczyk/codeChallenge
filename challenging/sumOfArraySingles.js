/*
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

*/

function repeats(arr){
    //Filter the items where the index  equals the last index of and then reduce the sum

    return arr.filter((num, i ,arr) => arr.indexOf(num) === arr.lastIndexOf(num)).reduce((acc,c) => acc + c,0)


}


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

console.log(repeats([4,5,7,5,4,8]), 15)

