/*
771. Jewels and Stones
Easy

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0

Constraints:

    1 <= jewels.length, stones.length <= 50
    jewels and stones consist of only English letters.
    All the characters of jewels are unique.
*/

//you get a string called jewels
//you get a string called stones

//do  the strings have duplicate letters? jewels string will not, stones can
//no special characters
//strings will not be empty
//max 50 characters
//return will always be an integer

function numJewelsInStones(jewels, stones){
    //compare stones string to jewels and find matching indecies and maybe do an accumulator to keep track of output
    // let accumulator = 0
    // for(let i=0; i<stones.length;i++){
    //     if(jewels.includes(stones[i])) accumulator++
    // }
    // return accumulator

    //hashmap to go through each letter in stones if the letter doesn't exist as a key then add it and increment the value
    let hashmap = {}
    for(let letter of stones){
        hashmap[letter] = (hashmap[letter] || 0) + 1
    }
    //split the string so we can reduce, use a reduce and add the value of what is in hashmap unless its undefined so then add a 0
    return jewels.split('').reduce((acc, c) => acc + (hashmap[c] || 0),0)
    // for(let letter of word){
    //     if(hashmap[letter] > 1){
    //       output += ')'
    //     }else{
    //       output += '('
    //     }
    //   }
    //   return output

}

console.log(numJewelsInStones('aA', 'aAAbbbb'), 3)
console.log(numJewelsInStones('z', 'ZZ'), 0)