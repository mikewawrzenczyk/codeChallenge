/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord

Don't forget to rate this kata! Thanks :)
*/

String.prototype.camelCase=function(){
    //do a return, check if the length of the string is 0 if so it is blank and return a blank space
    //otherwise trim spaces from left and right, split the string, do a map which uppercases the first word and concatenates the rest of the word starting at 1 with a slice. then join together with no spaces
    return this.length == 0 ? "" : this.trim().split(' ').map((words)=> words[0].toUpperCase()+words.slice(1)).join('')
    
}

console.log("test case".camelCase(), "TestCase");
console.log("camel case method".camelCase(), "CamelCaseMethod");
console.log("say hello ".camelCase(), "SayHello");
console.log(" camel case word".camelCase(), "CamelCaseWord");
console.log("".camelCase(), "");