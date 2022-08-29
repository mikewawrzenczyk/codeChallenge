/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
Examples

    "foefet" is an anagram of "toffee"

    "Buckethead" is an anagram of "DeathCubeK"

*/
// write the function isAnagram
var isAnagram = function(test, original) {
    
    //turn the strings into arrays because strings are immutable, go to lowercase, and sort the array
    let arrayTest = test.toLowerCase().split('').sort().join('')
    let arrayOriginal = original.toLowerCase().split('').sort().join('')

    console.log(arrayTest)
    console.log(arrayOriginal)

    //iterate through each array and compare character by character in each element to make sure they are equal, as soon as one sorted array element does not match return false
    for(let i = 0; i< test.length; i++){
        if(arrayTest[i] != arrayOriginal[i])
            return false
    }

    return true

};

console.log(isAnagram("foefet", "toffee"), true, 'The word foefet is an anagram of toffee')
console.log(isAnagram("Buckethead", "DeathCubeK"), true, 'The word Buckethead is an anagram of DeathCubeK')
console.log(isAnagram("Twoo", "WooT"), true, 'The word Twoo is an anagram of WooT')

console.log(isAnagram("dumble", "bumble"), false, 'Characters do not match for test case dumble, bumble')
console.log(isAnagram("ound", "round"), false, 'Missing characters for test case ound, round')
console.log(isAnagram("apple", "pale"), false, 'Same letters, but different count')