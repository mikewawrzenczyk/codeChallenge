/*
Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.
*/

//A number as input , print every integer from 1 to the number
//if the integer is divisble by 3 print out "fizz"
//if the integer is divisible by 5 print out "buzz"
//if the intege is divisible by 3 && 5 print out "fizz buzz"

//Will it never not be a number? number no funny business
//Will it ever be a string that looks like a number?
//log each numb or the appr word

//n = 5 -> 1,2,fizz,4,buzz
//n = 9 -> 1,2,fizz,4,buzz,fizz,7,8,fizz
//n = 15 -> 1,2,fizz,4,buzz,fizz,7,8,fizz, buzz, 11, fizz, 13, 14, fizzbuzz

function fizzBuzz(n){
    //for loop from 1 to num that is passed in
    for(let i =1; i <=n; i++){
        if(i % 3 === 0 && i % 5 === 0)
            console.log('fizzbuzz')
        else if (i % 3 === 0)
            console.log('fizz')
        else if (i % 5 === 0)
            console.log('buzz')
        else
            console.log(i)
    }
    //conditional
        //if num % 3 && num % 5 === 0 -> fizzbuzz NEEDS TO BE DONE FIRST or else you miss it once a num is divisble by 3 in the conditional
        //if num % 3 === 0 ->fizz
        //if num % 5 === 0 -> buzz
        
        //else log the num
}

fizzBuzz(5) //'1,2,fizz,4,buzz'
fizzBuzz(9) //'1,2,fizz,4,buzz,fizz,7,8,fizz'
fizzBuzz(15) //'1,2,fizz,4,buzz,fizz,7,8,fizz, buzz, 11, fizz, 13, 14, fizzbuzz'