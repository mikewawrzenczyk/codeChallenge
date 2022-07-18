/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
Parameters: array of 10 digits all between 0 and 9
Return: return a string in the exact form of a phone number with spaces etc. "(123) 456 7891"
*/

function createPhoneNumber(numbers){
    //add the - at the 6th index with a splice to the array
    numbers.splice(6, 0, '-')
    //make a string out of the array
    let phoneNumString = numbers.join('')
    //use a template literal to provide the proper phone number convention, then we just a slice of the string to finish off after first 3 numbers.
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${phoneNumString.slice(3)}`
}

/* different solution
var format = "(xxx) xxx-xxxx";

for(var i = 0; i < numbers.length; i++)
{
format = format.replace('x', numbers[i]);
}

return format;
*/

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");