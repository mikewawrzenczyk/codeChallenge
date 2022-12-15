/*
Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

describe("Two Sum", () => {
 it("Should implement two sum", () => {
  assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
 });
});
*/
 //how to determine if there is a pair, a pair has to add up to a sum in this case the sum is 4. I am checking as I grab each number 1, if I have a pair its counterpart would be 3.If I grab a number I see if its counterpart is in the object.
function twoSum(arr,sum){
    const pairs = []
    const nums = {}
// console.log(arr)
// console.log(sum)
    for(const num1 of arr){
       
        const num2 = sum - num1
        if(nums[num2]){
            pairs.push([num1,num2])
        }
        else{
            nums[num1] = 1
        }
        
        
    }
    return pairs
}

console.log(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]])