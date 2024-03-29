/*
Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

function countByNum(x, n) {
    let z = [];
    //we need to iterate by n amount of times and multiply the for look increment by x and push into the array.
    for(let i=1;i<=n;i++){
        z.push(i*x)
    }
    return z;
}

console.log(countByNum(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match")
console.log(countByNum(2,5), [2,4,6,8,10], "Array does not match")