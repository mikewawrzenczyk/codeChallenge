/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

    Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    Every smiling face must have a smiling mouth that should be marked with either ) or D

No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~) ;) ;D :-D ;~D
Invalid smiley faces: ;( :> :} :]
Example

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note

In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

P: given array, smiley faces that are valid are only :) :D ;-D :~)
R: return total number of valid smiley faves in array, if array is empty return 0
E: examples below
P:
*/

function countSmileys(arr) {
  //check if array is empty, if so, return 0
  if(arr.length == 0) return 0
  //make an array of valid smiley faces
  validSmileys = [':)', ':D', ';-D', ':~)', ';)', ';D', ':-D', ';~D', ':~D', ';~)', ':-)', ';-)']
  //iterate through each element of array and check against each element of correcrt smileyface array
  //if there is a match in the element with a valid smiley then increment a counter
  smileyCount = 0
  arr.forEach(c => {
    validSmileys.forEach(element => {
      // console.log(element)
      // console.log(c)
      if(element === c)
        smileyCount++
      console.log(smileyCount)
    })
  })
  return smileyCount
  //return after going through array
}

//REGEX one liner
//return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;

console.log(countSmileys([]), 0);
console.log(countSmileys([':D',':~)',';~D',':)']), 4);
console.log(countSmileys([':)',':(',':D',':O',':;']), 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);