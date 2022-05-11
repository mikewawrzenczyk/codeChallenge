/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Example

alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/
function alphabetPosition(text) {
  //change input string to lowercase for ease of use with switch case
  text = text.toLowerCase()
  //split string into array
  let textArray = text.split('')
  //iterate through array
  for(let i =0; i < textArray.length ; i++){
    //switch case for each alphabet character changing the array element to the alphabetical position
    switch(textArray[i]){
      case 'a': 
        textArray[i] = '1'
        break
        case 'b': 
        textArray[i] = '2'
        break
        case 'c': 
        textArray[i] = '3'
        break
        case 'd': 
        textArray[i] = '4'
        break
        case 'e': 
        textArray[i] = '5'
        break
        case 'f': 
        textArray[i] = '6'
        break
        case 'g': 
        textArray[i] = '7'
        break
        case 'h': 
        textArray[i] = '8'
        break
        case 'i': 
        textArray[i] = '9'
        break
        case 'j': 
        textArray[i] = '10'
        break
        case 'k': 
        textArray[i] = '11'
        break
        case 'l': 
        textArray[i] = '12'
        break
        case 'm': 
        textArray[i] = '13'
        break
        case 'n': 
        textArray[i] = '14'
        break
        case 'o': 
        textArray[i] = '15'
        break
        case 'p': 
        textArray[i] = '16'
        break
        case 'q': 
        textArray[i] = '17'
        break
        case 'r': 
        textArray[i] = '18'
        break
        case 's': 
        textArray[i] = '19'
        break
        case 't': 
        textArray[i] = '20'
        break
        case 'u': 
        textArray[i] = '21'
        break
        case 'v': 
        textArray[i] = '22'
        break
        case 'w': 
        textArray[i] = '23'
        break
        case 'x': 
        textArray[i] = '24'
        break
        case 'y': 
        textArray[i] = '25'
        break
        case 'z': 
        textArray[i] = '26'
        break
      //if it is not an alphabetical letter just put in an empty string
      default:
        textArray[i] = ''
        break
    }
  }
  //return the array filtered by removing all spaces (non alphabetic characters) and joing back as a string with spaces between each element.
  return textArray.filter(element => {
    return element !== ''}).join(' ')
}

//regex one liner solution
//let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ')
// arrow function taking argument of text. Then takes text to uppercase, uses a replace method to look pull a letter from A-Z, split the string to an array, then use an array method map on each element using the charcode method A.charCodeAt(0) would return 65, minus 64 returns 1. B would return 66 -64 = 2 etc. Then it joins it back together as a string with a space between each element.



console.log(alphabetPosition("The sunset sets at twelve o' clock."), "||| 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight."), "||| 20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
