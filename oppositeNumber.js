/*
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/

function opposite(number) {
    //check to see if number is less than 0, if it is then its negative so returning a negative to the number will make a positive, if it is NOT less than 0 you add a - to make the positive number negative
    return number < 0 ? -number : -number
}

console.log(opposite(1), -1,)
console.log(opposite(-5), 5,)