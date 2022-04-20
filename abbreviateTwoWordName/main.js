/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/
function abbrevName(name){
  //split string into array but each word is an element, map a new array by just getting first character of each word, join back together. return with a dot in between
  let initials = name.split(' ').map(word => word[0]).join('')
  return `${initials[0].toUpperCase()}.${initials[1].toUpperCase()}`

  //One liner
  // return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}

console.log(abbrevName("Sam Harris"), "S.H")
console.log(abbrevName("Patrick Feenan"), "P.F")
console.log(abbrevName("Evan Cole"), "E.C")
console.log(abbrevName("P Favuzzi"), "P.F")
console.log(abbrevName("BAQGylRYnL AXmXzKXMHtLdmkHBa"), "B.A")