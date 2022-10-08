/*
Write a function that will check if two given characters are the same case.

    If either of the characters is not a letter, return -1 // DONE
    If both characters are the same case, return 1
    If both characters are letters, but not the same case, return 0

Examples

'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

*/
function sameCase(a, b){
//check to see if both are letters with .match method and reg ez
 if(a.toLowerCase().match(/[a-z]/i) && b.toLowerCase().match(/[a-z]/i)){
    //check to see if each letter a and b match themselves comapred to lower case
    if(a === a.toLowerCase() && b === b.toLowerCase())
        return 1
    //check to see if each letter a and b match themselves comapred to upper case
    else if(a === a.toUpperCase() && b === b.toUpperCase())
        return 1
    //if neither of these match case conditions are true return 0 meaning that one is not matching case
    else 
        return 0
    
 }
 else{
    return -1
 }
}

console.log(sameCase('C', 'B', 1))
console.log(sameCase('b', 'a', 1))
console.log(sameCase('d', 'd', 1))
console.log(sameCase('A', 's', 0))
console.log(sameCase('c', 'B', 0))
console.log(sameCase('b', 'Z', 0))
console.log(sameCase('\t', 'Z', -1))
console.log(sameCase('H', ':', -1))