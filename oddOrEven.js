/*
Task:

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
Examples:

Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/
function oddOrEven(array) {
    //enter code here
    // if array.len
    // console.log(array)
    if(array.length == 0)
        return 'even'
    let sum = array.reduce((accumulator, current) => accumulator + current)
    // console.log(sum)
    return sum %2 == 0 ? 'even' : 'odd'
}

/* One liner
return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
*/

console.log(oddOrEven([0]), 'even')
console.log(oddOrEven([1]), 'odd')
console.log(oddOrEven([]), 'even')