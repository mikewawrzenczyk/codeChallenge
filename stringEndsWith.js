/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/

function solution(str, ending){
    // let length = ending.length * -1
    // let sub = str.slice(length)
    // return (ending ===sub || ending === '')
    //ends with method is cleaner solution
    return str.endsWith(ending)
}

console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)