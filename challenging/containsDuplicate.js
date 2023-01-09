/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/
const containsDuplucate = nums => nums.length != new Set(nums).size 
// function containsDuplicate(nums){
    // const uniqueNums = [... new Set(nums)]
    // //return (uniqueNums.length === nums.length) ? false : true
    // return uniqueNums.length !== nums.length

    
    //ONE LINER
    //set is better for smaller data arrays, object solution with hashmap is faster for large arrays 10k plus


    // //Hashmap object solution
    // let numsMap ={}
    // //create hashmap
    // for(let i=0 ; i< nums.length;i++){
    //     //goes to first number
    //     let num = nums[i]
    //     //checks to see if that number exists in object, if no then set to true
    //     if(numsMap[num]){
    //         return true
    //     }
    //     else{
    //     //if number property already exists in object we return false
    //         return false
    //     }
    // }

// }