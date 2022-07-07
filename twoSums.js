/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
*/
function twoSum(numbers, target) {
    //check length of array, loop through array the length amount of times and sum each element with element 0, then loop again but sum with second element
    //on target number return the correct indeces
    //you can do this by having a nested for loop and comparing the sum to the target then returning those indeces as an array
    let sum
    let answer = []

    for(let i=0; i < numbers.length; i++){
        for(let j=1; j <= numbers.length; j++){
            sum = numbers[i] + numbers[j]
            if(sum === target){
                // console.log(`[${i},${j}]`)
                answer.push(i,j)
                // return `[${i},${j}]`
                return answer
            }
        }
    }
}


console.log(twoSum([1, 2, 3], 4)) // returns [0, 2] or [2, 0])
console.log(twoSum([2, 2, 3], 4)) 
console.log(twoSum([2, 3, 1], 4)) 