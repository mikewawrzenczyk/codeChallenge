/*
I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

*/
function arrayPlusArray(arr1, arr2) {
    sumOfFirstArray = arr1.reduce((acc, c) => acc +c)
    sumOfSecondArray = arr2.reduce((acc, c) => acc +c)
    return sumOfFirstArray + sumOfSecondArray
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);