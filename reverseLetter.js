/*
 Given a string str, reverse it and omit all non-alphabetic characters.
Example

For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".
Input/Output

    [input] string str

A string consists of lowercase latin letters, digits and symbols.

    [output] a string

*/

function reverseLetter(str) {
    //remove all non alphabetic characters first
    //remove using regex pattern to only globally select all alphabetic character upper and lower case
    let regexNonAlpha = /[^A-Za-z]/g
    //we return the string by first replacing all non alphanumeric characters with a space, then splitting to an array, then reverse the array, then join the array back to a string.
    return str.replace(regexNonAlpha, '').split('').reverse().join('')
    
    
}

console.log(reverseLetter("krishan"),"nahsirk")

console.log(reverseLetter("ultr53o?n"),"nortlu")

console.log(reverseLetter("ab23c"),"cba")

console.log(reverseLetter("krish21an"),"nahsirk")