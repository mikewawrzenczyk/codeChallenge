/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
  // your code
  //P: Two strings s1 and s2, will only include letters a-z
  //R: New string sorted, look for unique letters in each and combine the longest
  //E: exammples above
  //P: 
  //sort each string
  //filter or reduce the strings to have only unique non repeating letters
  //combine them together and return sorted.
  //endedup converting each string to an array, combining both into a new variable by spread operator.
  // In this method, we use the set data structure. The set data structure contains only unique values, and we take the advantage of it. So to extract the unique values from string using Set we follow the steps below.

  //   Using the split() method convert the string into an array.
  //   Create a Set using new Set() and pass the converted array into it.
  //   Now convert the set into an array using spread operator e.g: […set]
  //   And then join that array to make a string.
  arrayS1 = s1.split('')
  arrayS2 = s2.split('')
  bothStrings = [...arrayS1, ...arrayS2]
  bothStrings = new Set(bothStrings)
  bothStrings = [...bothStrings].sort().join('')
  return bothStrings
}



console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
