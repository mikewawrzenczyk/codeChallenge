/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
  const arrayize = str.split('')
  //take the string and turn it into an array which we can then filter 
  const xs = arrayize.filter(element => element.toLowerCase() === 'x')
  //creat a new array from arrayize array filtering by x's in lower case
  const os = arrayize.filter(element => element.toLowerCase() === 'o')
  //create a new array from arrayize array filtering by o's in lower case
  if(xs.length === os.length)
    return true
  else 
    return false
  //check if x's array length is equal to o's array length, if so return true. If there are none they will still be 0 and equal so a true statement.
}

console.log(XO('xo'),true)
console.log(XO("xxOo"),true)
console.log(XO("xxxm"),false)
console.log(XO("Oo"),false)
console.log(XO("ooom"),false)
