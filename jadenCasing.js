/*
Take a string a convert each word to have first letter capitalized
*/

String.prototype.toJadenCase = function () {
    //use this to reference the variable passed to the object
    //take the string and split it into an array, map over each element of the array and take the first character of the array to upper case, then concatenate the rest of the element by starting at substring (1) or second index and joing it back together.
    return this.split(' ').map(element => element[0].toUpperCase() + element.substring(1).toLowerCase()).join(' ')
}

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");