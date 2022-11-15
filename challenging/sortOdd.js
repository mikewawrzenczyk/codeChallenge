/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, [1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
*/

function sortArray(array){
    //filter, sort, map
    const oddNums = array.filter(n=> n % 2 !==0).sort((a,b) => b-a)
    // console.log(oddNums)
    //n %2 for truthy, this is more readable 
    return array.map(n => n %2 === 0 ? n: oddNums.pop())
    //shift happens in 0n high time complexity. Pop is constant time but we need to sort descending
}

console.log(sortArray([7,1], '[1,7]'))
console.log(sortArray([5, 8, 6, 3, 4], '[3, 8, 6, 5, 4]'))

