/*
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

*/
function mygcd(x,y){
    // for(let i= Math.min(x,y); i>0;i--){
    //     if(x % i === 0 && y % i === 0){
    //         return i
    //     }
    // }
    //Recursion answer
    let max = Math.max(x, y)
    let min = Math.min(x, y)
    let remainder = max % min
    if(remainder === 0){
      return min
    }
    //recursively keep returning the min and remainder
    return mygcd(min, remainder)
}


console.log(mygcd(30,12),6)
console.log(mygcd(8,9),1)
console.log(mygcd(1,1),1)