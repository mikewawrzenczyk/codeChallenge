/*
The museum of incredible dull things

The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
Task

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples

* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]

*/

function removeSmallest(numbers) {
    // throw "TODO: removeSmallest";
    //loop through array, find lowest and the index
    //remove the element index from array, remove lowest index
    //do not sort
    // console.log(Math.min(...numbers))
    // console.log(numbers)
    if(numbers.length === 0){
        return []
    }
    let min = Number.POSITIVE_INFINITY
    for (const value of numbers) {
        min = Math.min(min, value)
    }
    // console.log(min)
    let lowestIndex =[]
    numbers.forEach(function (value, i) {
        if(value === min){
            lowestIndex.push(i)
        }
    })
    let remMinimumNumbers = numbers
    remMinimumNumbers.splice(lowestIndex[0],1)
    return remMinimumNumbers
}

//better solutionm
/*
Use spread operator to return the index of the minimum
Return  array spread with slice starting at index of minimum to spread operator of index of minimum +1
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
*/

console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
console.log(removeSmallest([]), [], "Wrong result for []");