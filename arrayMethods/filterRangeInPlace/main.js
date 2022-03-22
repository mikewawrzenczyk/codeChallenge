/*
Filter range "in place"
importance: 4

Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.

For instance:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]
*/
function filterRangeInPlace(arr, a, b){
    // return arr.filter(element => (element <= b && element >= a))
    for(let i=0;i < arr.length; i++){
        //because we are doing  i-- for removed elements we don't need to put .length -1 here???
        if(arr[i] > b || arr[i] < a){
            arr.splice(i,1)
            // console.log( arr )
            i--
            //because you removed an element the index is smaller and needs to be accounted for
        }
    }
    // console.log( arr );
}


let arr = [5, 3, 8, 1, 2, 20, 50, 21, 3, 82, 1003, 25, 2, 3, 20014, 20];
// let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log( arr ); // [3, 1]