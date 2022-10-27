/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes

Assertion messages may be unclear about what they display in some languages. If you 
*/

function encodeDupes(str){
    //toLowerCase()
    //split, then map , check to see if current letternode repeats or not, indexOf == lastindexOf ?  '(' :  ')', then join them
    return str.toLowerCase()
            .split('')
            .map((letter,index,array) => array.indexOf(letter) === array.lastIndexOf(letter) ? '(' : ')')
            .join('')
    //this is a quadratic solution since two things are looping, map and the indexOfs
}

/*hashmap solution better time complexity
function duplicateEncode(word) {
  let hashmap = {}
  word = word.toLowerCase()
  
  for(let letter of word){
    hashmap[letter] = (hashmap[letter] || 0) + 1
  }

  let output = ''
  for(let letter of word){
    if(hashmap[letter] > 1){
      output += ')'
    }else{
      output += '('
    }
  }
  return output
}
*/

console.log(encodeDupes("din"), "(((")
console.log(encodeDupes("recede"), "()()()")