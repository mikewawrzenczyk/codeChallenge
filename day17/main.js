/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

function solution(nums){
  if(nums == null || nums.lenth === 0) return ([])
  else return nums.sort(function(a, b){return a - b})
  //check to see if the array is null, or is empty. you need to check for null first or else it will eror out
  //if so return [].
  //otherwise you need to sort the array by using a comparative function otherwise it will sort
  //as a strin and the sort will not work properly.
}

console.log(solution([1,2,3,10,5]), [1,2,3,5,10])
console.log(solution(null), [])
console.log(solution([]), [])
console.log(solution([20, 2, 10]), [2,10,20])
console.log(solution([2, 20, 10]), [2,10,20])

