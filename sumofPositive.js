/*
    You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

function positiveSum(arr) {
    if (arr.length < 1) return 0
    const onlyPositive = arr.filter(num => num > -1)
    return onlyPositive.reduce((acc,c) => acc + c,0)
}

//return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
//way simpler return, tried to do this earlier but ended up filter first

console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);