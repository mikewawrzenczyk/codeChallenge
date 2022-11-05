/*
// Given an array of integers `arr`, return `true` if the number of occurrences of each value
// in the array is **unique**, or `false` otherwise.

// Example 1:
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

// Example 2:
// Input: arr = [1,2]
// Output: false
*/

//always an array of i ntergers not strings
//array could be empty

function isUniqueArray(arr){
    //if array is less than 
    if(arr.length <2){
        return false
    }
    let arrayValues = {}
    //conduct occurence of each value of each integer in the array, for example how may 1's are there, how many 2's are there etc. hashmap?
    //iterate through the array and populate the hashmap
    for(element of arr){
        if(!arrayValues.hasOwnProperty(element)){
            arrayValues[element] = 1
        }
        else{
            arrayValues[element]++
        }
    }
    //create a variable pulling only the occurence values
    const occurenceValues = Object.values(arrayValues)
    //check for unique values
    let occurenUniqueValues = [...new Set(occurenceValues)]
    //conditional to check to see if there are unique occurences
    //return boolean of true or false
    return occurenceValues.length === occurenUniqueValues.length


}

console.log(isUniqueArray([1,2,2,1,1,3]), true)
console.log(isUniqueArray([1,2]), false)
console.log(isUniqueArray([]), false)
