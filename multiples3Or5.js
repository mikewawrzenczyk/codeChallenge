/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)
*/

function solution(number){
  //Params positive or negative numbers, multiple of both 3 and 5 count only once to sum
  //Result return 0 if number is negative, otherwise return integer
  //For Loop iterating through the numbers below the given number
  //if statements checking to see if the number is a multiple of 3 or 5 and 
  //accumulator counting the sum.

  if(number <0) return 0


  let accumulator=0
  for(i=number-1; i>0; i--){
    //   console.log(i)
    if(i % 5 === 0 || i% 3 ===0){
        accumulator +=i
        // console.log(`sum = ${accumulator}`)
    }
  }
  return accumulator
}

console.log(solution(10,23))