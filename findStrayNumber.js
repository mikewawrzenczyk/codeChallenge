/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
Examples

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3


*/

function stray(numbers) {
    let hashmap = {}

    for(let number of numbers){
        hashmap[number] = (hashmap[number] || 0) + 1
    }

    for(const value in hashmap){
        if(hashmap[value] === 1){
            return Number(value)
        }
    }
}

//one liner arrow function
//const stray = nums => nums.reduce((a, b) => a ^ b);

console.log(stray([1, 1, 2]), 2);
console.log(stray([1, 2, 1]), 2);
console.log(stray([2, 1, 1]), 2);