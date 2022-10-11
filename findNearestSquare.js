/*
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :)
*/

function nearestSq(n){
    //find the square root of n, then you will get an integer with decimals. Round up and down and math.pow^2 each of those answers, then see which is closer to N, that will be your nearest
    // return Math.sqrt(n)
    /*
    Better One Line Solution
    const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);
    */
    let sqrt = Math.sqrt(n)
    let high = Math.pow(Math.ceil(sqrt),2)
    let low = Math.pow(Math.floor(sqrt),2)
    const distanceHigh = high - n
    const distanceLow = n - low
    console.log(`SQRT ${sqrt}, High ${high}, Low ${low}`)
    console.log(`High Distance ${distanceHigh}, Low Distance ${distanceLow}`)
    if(distanceHigh < distanceLow)
        return high
    else
        return low

}

console.log(nearestSq(1),1)
console.log(nearestSq(2),1)
console.log(nearestSq(10),9)
console.log(nearestSq(111),121)
console.log(nearestSq(9999),10000)