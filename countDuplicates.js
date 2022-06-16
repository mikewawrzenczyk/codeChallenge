/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/
function duplicateCount(text){
    //set a counter for checking the values later on
    let counter = 0
    //if the text string length is 0 or empty then just return 0
    if (text.length ==0)
        return 0
    //Originally tried to sort it but didn't need ot with this method.
    //we take the string lowercase it, split it into an array and use reduce method
    //Use the reduce() method to count the duplicates in an array, passing it an empty object as the initial value for the accumulator. On each iteration, increment the occurrences of present values in the object or initialize the value to 1.
    const count = text.toLowerCase().split('').reduce((accumulator, value) => {
        return {...accumulator, [value]: (accumulator[value] || 0) + 1};
      }, {});
    //now we iterate through each key value pair in the object and increment our counter if the value of the letter pair is greater than 1 or has more than one duplicate
    for(const value in count){
        // console.log(value)
        if(count[value] > 1)
            counter++
    }
    // return Object.keys(count).length
    return counter
}

/*
Simpler Reg Ex solution
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
*/

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2,"should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")