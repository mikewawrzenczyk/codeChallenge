/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

getAverage([2,2,2,2]),2)
getAverage([1,2,3,4,5,]),3);
getAverage([1,1,1,1,1,1,1,2]),1)
*/

// function getAverage(arr){
//     //loop through array to get sum, reduce is a linear complexity
//     // let sum = arr.reduce((acc,c) => acc + c)
//     // //avg -> sum / arr.lenth, wrap in math.floor to make sure to round down
//     // //return
//     // return Math.floor(sum / arr.length)

//     // single line
//     return Math.floor(arr.reduce((acc, c) => acc +c) / arr.length)

// }

const getAverage = arr => Math.floor( arr.reduce((acc,c) => acc +c) / arr.length)

console.log(getAverage([2,2,2,2]),2)
console.log(getAverage([1,2,3,4,5,]),3)
console.log(getAverage([1,1,1,1,1,1,1,2]),1)