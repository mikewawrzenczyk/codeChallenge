/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

function removeExclamationMarks(s) {
  return s.split('').filter(character => character !== '!').join('')
}

console.log(removeExclamationMarks("Hello World!"), "Hello World");