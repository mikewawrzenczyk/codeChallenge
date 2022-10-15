/*
array of nums, target num, return indices of nums that add up to target
[1,2,3,4,5] - 9 => 3,4
*/

//array of nums - not empty, always nums, whole, positive, at least 2, num + self will never be target, only 2 nums will equal target no more than one solution
//return indicies of nums that add up to target in -> array []

//[1,2,3,4,5], 9 => [3,4]
//[5,6,9], 11 => [0,1]
//[22,7,100,5], 12 => [1,3]

function findIndicies(array, target){
    //outisde loop is grabbing original num
    for(let i = 0; i < array.length;i++){
        //compare outside num to internal nums
        for(let k =0; k<array.length;k++){
            if(array[i] + array[k] === target & i !== k){
                return [i,k]
            }
        }
    }
}

//better solution would be a hashmap

console.log(findIndicies([1,2,3,4,5], 9), '[3,4]')
console.log(findIndicies([5,6,9], 11), '[0,1]')
console.log(findIndicies([22,7,100,5], 12), '[1,3]')