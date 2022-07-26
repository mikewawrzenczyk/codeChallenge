/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/

function toCamelCase(str){
    //check to see if the string contains hyphens or dashes and split on them into a mutable array
    let stringSplit = []
    if(str.includes('-')){
        stringSplit = str.split('-')
    }
    else if(str.includes('_')){
        stringSplit = str.split('_')
    }
    //if string is not those it is empty so return it
    else{
        return str
    }
    //itterate through array and take each element of the array by uppercasing first character anbd concatenating the rest
    for(let i=1; i<stringSplit.length;i++){
        stringSplit[i] = stringSplit[i].charAt(0).toUpperCase() + stringSplit[i].slice(1)
    }
    return stringSplit.join('')
//
}

console.log(toCamelCase(''), '', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")