/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

Params:non integer n
Return: return digits in descending order

*/

function descendingOrder(n){
    return Number(n.toString().split('').sort((a,b) => b-a).join(''))
    //return a Number which is built by taking the integer, turning it into a string, splitting into an array on each character, sorting in descneding order and then joining back on each character
}

console.log(descendingOrder(0), 0)
console.log(descendingOrder(1), 1)
console.log(descendingOrder(111), 111)
console.log(descendingOrder(15), 51)
console.log(descendingOrder(1021), 2110)
console.log(descendingOrder(123456789), 987654321)