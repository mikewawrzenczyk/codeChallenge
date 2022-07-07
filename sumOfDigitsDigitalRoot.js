/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

*/
function digital_root(n) {
    // ...
    //P non negative intereger, add all the digits in the integer , keep going until it is a single digit
    //R return a single digit number

    //turn integer into an array of digits
    let intArr = Array.from(String(n), Number);
    let sumOfArray = 0
    //do a while loop WHILE the length of the new digita array is greater than 1. 
    while(intArr.length > 1){
        //add all values in the integer digit array and make it the sumOfArray variable
        sumOfArray = intArr.reduce((accumulator, current) =>  accumulator + current)
        //assign the sumOfArray to be the initial Array
        intArr = Array.from(String(sumOfArray), Number)
    }
    return intArr[0]

}

console.log( digital_root(16), 7 )
console.log( digital_root(456), 6 )