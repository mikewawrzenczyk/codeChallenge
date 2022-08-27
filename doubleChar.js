/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):

* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck!
*/
function doubleChar(str) {
    //strings are immutable and you need to iterate through the str passed in to this function, double each character by using .repeat and pushing the character into an array
    //you then return an array joined by no space to make a string.
    doubleStr = []
    for (let c of str) {
        doubleStr.push(c.repeat(2))
      }
    return doubleStr.join('')
}

console.log(doubleChar("abcd"), "aabbccdd");
console.log(doubleChar("Adidas"), "AAddiiddaass");
console.log(doubleChar("1337"), "11333377");
console.log(doubleChar("illuminati"), "iilllluummiinnaattii");
console.log(doubleChar("123456"), "112233445566");
console.log(doubleChar("%^&*("), "%%^^&&**((");