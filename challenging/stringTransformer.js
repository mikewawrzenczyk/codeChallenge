/*
Description:

Given a string, return a new string that has transformed based on the input:

    Change case of every character, ie. lower case to upper case, upper case to lower case.
    Reverse the order of words from the input.

Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"

You may assume the input only contain English alphabet and spaces.

*/

function transformStr(str){
    //split str " " ->  reverse -> join
    //split str " " -> map l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()
    // let reversedStr = str.split(' ').reverse().join(' ')
    // //this arrow function in map has an implicit return
    // let transformedStr = reversedStr.split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')
    // return transformedStr



    //one liner
    return str.split(' ').reverse().join(' ').split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')
}

console.log(transformStr("Example Input"), "iNPUT eXAMPLE")
console.log(transformStr("Mike Dubs"), "mIKE dUBS")
