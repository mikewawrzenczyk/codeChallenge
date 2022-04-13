/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/

function disemvowel(str) {
  //take string and split it into an array for each character of the string
  let arrayStr = str.split('')
  //return using map with an if statement condition on each item demanding each item needs to NOT be a vowel, if so return the item into the map, if its a vowel leave it, then joint array back so it becomes a string.
  return arrayStr.map(item => {
    if(item.toLowerCase() !== 'a' && item.toLowerCase() !== 'e' && item.toLowerCase() !== 'i' && item.toLowerCase() !=='o' && item.toLowerCase() !== 'u'){
      return item
    }
  }).join('')
}

//could of used Regex as well return str.replace(/[aeiou]/gi, '');

console.log(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
console.log(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")