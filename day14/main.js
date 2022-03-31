/*Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5

Let's assume that all numbers in the input will be integer values.

*/
function sumDigits(number) {
  return splitDigit = ('' + number).split('').filter(isNegative => isNegative != '-').reduce((sum,value) =>  sum + Math.abs(value),0)
 //return in splitDigit in one line
 //concatenate an empty string with the number provided, then split the result into an array by splitting on '', this turns the numbers into an array, now you filter the array by including anything that isn't a - because the split will split a negative number into a minus and a number. now we use reduce to sum the filtered value by adding sum plus valie as absolute (might not need absolute since our solution filtered out the negatives)
}

// let sum = numbers.reduce((totalValue, currentValue) => totalValue + currentValue, initialValue);

console.log(sumDigits(10), 1)
console.log(sumDigits(99), 18)
console.log(sumDigits(-32), 5)