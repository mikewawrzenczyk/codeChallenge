/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)


*/

function isIsogram(str){
    const arrayStr= str.toLowerCase().split('').sort()
    // console.log(arrayStr)
    for(let i=0;i<str.length-1;i++){
        // console.log(`${arrayStr[i]} & ${arrayStr[i+1]}`)
        if(arrayStr[i] === arrayStr[i+1])
            return false
    }
    return true
}

/* Better solution
Implicit return checks a mapped new Set on uppercase letters if the length matches then its an isogram, if it is different it is NOT

  return new Set(str.toUpperCase()).size == str.length;

*/

console.log( isIsogram("Dermatoglyphics"), true );
console.log( isIsogram("isogram"), true );
console.log( isIsogram("aba"), false, "same chars may not be adjacent" );
console.log( isIsogram("moOse"), false, "same chars may not be same case" );
console.log( isIsogram("isIsogram"), false );
console.log( isIsogram(""), true, "an empty string is a valid isogram" );