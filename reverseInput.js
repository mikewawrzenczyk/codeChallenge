/*
Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)!
loop through string adding current value to previous equals a reversed string
*/

function reverseInput(string){
    let reversed = ''
    for(let i=string.length-1;i>=0;i--){
        reversed += string[i]
    }
    return reversed
}

console.log(reverseInput('mike'), 'ekim')
console.log(reverseInput('anna'), 'anna')
console.log(reverseInput('equal'), 'lauqe')
