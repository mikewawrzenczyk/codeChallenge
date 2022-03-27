/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/

function solution(str, ending){
    const endingLength = ending.length
    // console.log(endingLength)
    if (endingLength === 0) return true
    //a ending lenth of 0 means it would return the whole string on a slice so we just exit out by returning true
    // get length of ending to then grab that length of the str variable
    return ending === str.slice(-endingLength) ? true : false
    //return a true or false depending if the ending variable is the same as the last X digits of str
}

console.log(solution('abcde', 'cde'))// true
console.log(solution('abcde', 'abc')) //false
console.log(solution('abc', '')) //true
