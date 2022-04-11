/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


*/

function getCount(str) {
    var vowelsCount = 0;
    
    // enter your majic here
    //change string into an array, walk through array and check for a condition of a vowel for each element, if it was equal to a vowel we would increment the vowel counter.
    arrayStr = str.split('')
    for(let i=0; i < arrayStr.length;i++)
        if(arrayStr[i] === 'a' || arrayStr[i] === 'e' || arrayStr[i] === 'i' || arrayStr[i] === 'o' || arrayStr[i] === 'u')
            vowelsCount++
    
    return vowelsCount;
  }

console.log(getCount("abracadabra"), 5)