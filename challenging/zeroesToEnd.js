/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/

function moveZeros(arr) {
  let arrayLength = arr.length
  let zeroCount = 0
  for(let i =0; i<arrayLength;i++){
    if(arr[i] === 0){
        arr.splice(i,1)
    }
  }

  //if you go forward in array and remove an element you skip the element after the one removed because the index gets moved to the left.

  return arr
    // if(arr[0]===0){
    //     arr.push(arr.splice(i, 1).pop())
    // }
    // for(let i=arr.length;i>0;i--){
    //     if(arr[i]===0){
    //         arr.push(arr.splice(i,1).pop())
    //     }
    // }
    // return arr

}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
console.log(moveZeros([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]),[ 9, 9, 1, 2, 1, 1, 3, 1, 9, 9, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0 ])