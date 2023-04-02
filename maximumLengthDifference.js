/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
Example:

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13

Bash note:

    input : 2 strings with substrings separated by ,
    output: number as a string
*/

function mxdiflg(a1, a2) {
    // your code
    if(a1.length === 0 || a2.length === 0) return -1
    // Getting the length of the largest string from both arrays.
    const bigA1 = Math.max(...a1.map(i => i.length))
    const bigA2 = Math.max(...a2.map(i => i.length))

    // Getting the length of the smallest string from both arrays.
    const smA1 = Math.min(...a1.map(i => i.length))
    const smA2 = Math.min(...a2.map(i => i.length))

    // Calculating the difference
    // Math.abs() ensures that we don't get negative values.
    const difA1 = Math.abs(smA1 - bigA2)
    const difA2 = Math.abs(bigA1 - smA2)

    // Returning the biggest value
    return difA1 > difA2 ? difA1 : difA2
}

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2), 13);