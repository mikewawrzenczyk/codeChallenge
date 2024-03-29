/*
Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example:

348597 => [7,9,5,8,4,3]
0 => [0]
*/

function digitize(n) {
    //make an arrow with Array.from(String(variable), Number) then reverse it
    return Array.from(String(n), Number).reverse()
}

console.log(digitize(35231),[1,3,2,5,3]);
console.log(digitize(0),[0]);
