/*
Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

 

Example 1:

Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
Output: 2
Explanation:
- "leetcode" appears exactly once in each of the two arrays. We count this string.
- "amazing" appears exactly once in each of the two arrays. We count this string.
- "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
- "as" appears once in words1, but does not appear in words2. We do not count this string.
Thus, there are 2 strings that appear exactly once in each of the two arrays.

Example 2:

Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
Output: 0
Explanation: There are no strings that appear in each of the two arrays.

Example 3:

Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
Output: 1
Explanation: The only string that appears exactly once in each of the two arrays is "ab".

 

Constraints:

    1 <= words1.length, words2.length <= 1000
    1 <= words1[i].length, words2[j].length <= 30
    words1[i] and words2[j] consists only of lowercase English letters.

I went with two hash maps and just deleted the key from the first if the word occurred twice in the second and updated the count accordingly
*/

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let word1Object = {}
    for(let letter of words1){
        word1Object[letter] = (word1Object[letter] || 0) + 1
    }

    let word2Object = {}
    for(let letter of words2){
        word2Object[letter] = (word2Object[letter] || 0) + 1
    }
    console.log(word1Object)
    console.log(word2Object)

    let count = 0

    for(key in word2Object){
        // console.log(entry)
        if(word2Object[key] ===1 && word1Object[key] ===1){
            count++
        }
    }

    return count
    // for(const key in word2Object){
    //     if
    // }
    // let words2Array = Object.entries(word2Object)
    
    // console.log(words2Array)

    // for(entry of words2Array){
    //     console.log(entry)
    //     if(entry[1] > 1){
    //         console.log(word1Object)
    //         delete word1Object[entry[0]]
    //         console.log(word1Object)
    //     }
    // }
    // // console.log(word1Object)

    // return Object.keys(word1Object).length

}

console.log(countWords(["a","ab"], ["a","a","a","ab"]), 1)
console.log(countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"]), 2)
console.log(countWords(["b","bb","bbb"], ["a","a","a","ab"]), 0)