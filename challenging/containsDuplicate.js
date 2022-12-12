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

function containsDuplicate(nums){
    const uniqueNums = [... new Set(nums)]
    //return (uniqueNums.length === nums.length) ? false : true
    return uniqueNums.length !== nums.length

    //const containsDuplucate = nums => nums.length != new Set(nums).size ONE LINER
}