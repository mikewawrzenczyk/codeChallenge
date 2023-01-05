/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
Examples

"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

    don't worry about uppercase vowels
    y is not a vowel
*/

function shortcut(string){
    // return string.split('').filter(element => element != "a" && element != "e" && element !="i" && element !="o" && element !="u").join('')
    //regex answer
    return string.replace(/[aeiou]/g,'')
}

console.log(shortcut('hello'), 'hll')
console.log(shortcut('how are you today?'), 'hw r y tdy?')
console.log(shortcut('complain'), 'cmpln')
console.log(shortcut('never'), 'nvr')