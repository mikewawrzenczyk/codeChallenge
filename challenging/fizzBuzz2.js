/*
Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.
*/

function fizzBuzz(number){
    //iterate from a for loop
    //use modulus to check for divisibility
    //check for 2 && 3 together first otherwise if its divisible by 2 or 3 first it will not print properly.
    for(let i=1; i <= number;i++){
        if(i % 2 ===0 && i %3 ===0)
            console.log('fizzbuzz')
        else if (i % 2 === 0)
            console.log('fizz')
        else if (i % 3 ===0)
            console.log('buzz')
        else
            console.log(i)
    }
}

console.log(fizzBuzz(6), '1,fizz,buzz,fizz,5,fizzbuzz')
console.log(fizzBuzz(8), '1,fizz,buzz,fizz,5,fizzbuzz, 7, fizz')