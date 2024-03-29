/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

Constraints:

    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // const sLength = s.length
    // const tLength = t.length
    // if (sLength != tLength)
    //     return false
    // if(sLength > tLength){
    //     return (s.split('').sort().join('').includes(t.split('').sort().join('')))
    // }
    // return (t.split('').sort().join('').includes(s.split('').sort().join('')))

    //solution faster time and space complexity
    /*We can use an integer array freq of length 26 to keep track of the frequency of each letter in the two strings. We first check if the length of both strings is the same. If not, we return false because anagrams must have the same length. We loop through each character in both strings and increment the frequency of the corresponding letter in s and decrement the frequency of the corresponding letter in t.
Finally, we loop through the freq array and check if all requencies are zero. If not, we return false. If all frequencies are zero, we return true because both strings are anagrams of each other.

    Time complexity: O(n)O(n)O(n), where n is the length of the strings. We need to loop through each character in both strings once to count the frequency of each letter, and then loop through the freq array once to check if all frequencies are zero.

    Space complexity: O(1)O(1)O(1), because the size of the freq array is fixed at 26, which is a constant value. Therefore, the space required to store the freq array does not depend on the length of the strings.


*/
    if (s.length !== t.length) {
        return false;
    }
    
    var freq = new Array(26).fill(0);
    for (var i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    
    for (var i = 0; i < freq.length; i++) {
        if (freq[i] !== 0) {
            return false;
        }
    }
    
    return true;
}

console.log(isAnagram('anagram','nagaram'), true)
console.log(isAnagram('rat','cat'), false)
console.log(isAnagram('a','ab'), false)