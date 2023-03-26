/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]


*/

function twoOldestAges(ages){
    let sortedAges = ages.sort(function(a,b){return a-b})
    console.log(sortedAges)
    return [sortedAges[ages.length -2], sortedAges[ages.length -1 ]]
}

let results1 = twoOldestAges([1,5,87,45,8,8]);
let results2 = twoOldestAges([6,5,83,5,3,18]);

console.log(results1[0], 45, 'Passed values of [1,5,87,45,8,8] should return [45, 87]');
console.log(results1[1],87, 'Passed values of [1,5,87,45,8,8] should return [45, 87]');

console.log(results2[0], 18, 'Passed values of [6,5,83,5,3,18] should return [18, 83]');
console.log(results2[1], 83, 'Passed values of [6,5,83,5,3,18] should return [18, 83]');