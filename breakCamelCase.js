/*
Put a space if a string is in came case
*/

function solution(string) {
    //passing regular expressions to replace method on the string.
    //forward slash / marks begging and end of expression
    //[A-Z] upper case letter range, use gllobal flag g to match every occurence.
    //replace shows $& which inserts the matched usbrting plus a space
    //trim method removes any leading or trailing zeros.
    return string.replace(/[A-Z]/g, ' $&').trim()
}

console.log(solution('camelCasing'), 'camel Casing', 'Unexpected result')
console.log(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
