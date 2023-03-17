/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

*/
function findUniq(arr) {
    let hashmap = {}
    /*
    hashmap = {
        1: 1,
        0: 2
    }
    */

    //create hashmap
    for(let number of arr){
        //1, 0, 0 
        hashmap[number] = (hashmap[number] || 0) + 1
    }
    
    for(const value in hashmap){
        // console.log(value)
        if(hashmap[value] === 1){
            return value
        }
    }
}
/* solution by using sort!
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
*/
console.log(findUniq([ 1, 0, 0 ]), 1);
console.log(findUniq([ 0, 1, 0 ]), 1);
console.log(findUniq([ 0, 0, 1 ]), 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ]), 10);