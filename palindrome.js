/*
Create a function that takes in a word and the function should return if the word is a palindrome or not
*/

//word -> str, no empty string, no bangs special characters, no num, no funny biz, no caps, always 1 word
//return -> boolean true or false
//racecar -> true
//anna -> true
//burrito -> false

// function isPalindrome(word){
//     //word --> reverse that word - split reverse join
//     //revWord === word
//     let reversedWord = word.split('').reverse().join('')
//     return reversedWord === word ? true : false
// }
const isPalindrome = word => word === word.split('').reverse().join('')


console.log(isPalindrome('racecar'), true)
console.log(isPalindrome('bob'), true)
console.log(isPalindrome('tacos'), false)