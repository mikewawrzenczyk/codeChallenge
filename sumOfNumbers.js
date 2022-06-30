/*
Given two integers positive or negative return the sum starting at number A to number B. all numbers in between and including them
If they are the same return A or B
*/

function getSum( a,b ){
   const max = Math.max(a,b)
   let min = Math.min(a,b)

   //find the lowesrt and maximum number
// sum variable declared
    let sum = 0
    //do a for loop with min <= max and increment min
    //increment sum with min on each loop
    for(min;min<=max;min++){
        sum += min
    }
    return sum
}

/* Better solution
    let min = Math.min(a, b),
    max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
*/

console.log(getSum(0,-1),-1);
console.log(getSum(0,1),1);
console.log(getSum(1,2),3);