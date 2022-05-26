const allEqual = arr => arr.every(val => val === arr[0])

console.log(allEqual([1,2,3,4,5,6])) //false
console.log(allEqual([3,3,3,3,3,3])) //true