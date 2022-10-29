/*
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

 

Example 1:

Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

Example 2:

Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.

 

Constraints:

    2 <= s.length <= 1000
    s.length is even.
    s consists of uppercase and lowercase letters.
*/
var halvesAreAlike = function(s) {
    //calculate string half
    //create two strings half a and half b
    //compare the strings by checking for vowels with reg ex, making sure the match is the same length
    //return
    let half = s.length / 2 
    let a = s.substring(0,half)
    let b = s.substring(half, s.length)
    // return `${a} -> ${b}`

    return a.match(/[aeiou]/gi).length === b.match(/[aeiou]/gi).length
};

console.log(halvesAreAlike('book'), true)
console.log(halvesAreAlike('textbook'), false)


