/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

function removeExclamationMarks(s) {
  return s.split('').filter(character => character !== '!').join('')
}

//Regex solution
//return s.replace(/!/gi,'')

console.log(removeExclamationMarks("Hello World!"), "Hello World");