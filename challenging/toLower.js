/*
709. To Lower Case
Easy
1.4K
2.6K
Companies

Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

 

Example 1:

Input: s = "Hello"
Output: "hello"

Example 2:

Input: s = "here"
Output: "here"

Example 3:

Input: s = "LOVELY"
Output: "lovely"

 

Constraints:

    1 <= s.length <= 100
    s consists of printable ASCII characters.


*/

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    return s.split('').map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter).join('')
}

console.log(toLowerCase('Hello'), 'hello')
console.log(toLowerCase('here'), 'here')
console.log(toLowerCase('LOVELY'), 'lovely')
console.log(toLowerCase('RaNdOMWorDs'), 'randomwords')