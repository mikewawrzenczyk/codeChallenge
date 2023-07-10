/*
In the following 6 digit number:

283910

91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890

67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits. 
*/

function solution(digits){
  return digits.split('').reduce((pre,_,ind) => Math.max(pre,digits.slice(ind, ind +5)))
}

/*
Here is a breakdown of how the code works:

    digits.split(''): The input string digits is first split into an array of individual characters using the split() method. This allows us to easily manipulate and access each individual digit.

    .reduce((pre,_,ind) => Math.max(pre,digits.slice(ind, ind +5))): The reduce() method is then called on the resulting array. This method applies a function to each element of the array, reducing it to a single value.

The function passed to reduce() takes three arguments:

    pre: the accumulator value that is initially set to the first element of the array
    _: an unused variable that represents the current element being processed (in this case, we do not need to use it)
    ind: the index of the current element being processed

The function then uses the Math.max() method to compare the current 5-digit substring of the input string starting from ind with the previous maximum value (pre), and returns the larger of the two.

This process continues for each element of the input array, until the largest consecutive 5-digit number is found. Finally, this value is returned as the output of the function.
*/


//better solution that passes all test 
//[...digits].reduce((pre, _, idx) => Math.max(pre, digits.slice(idx, idx + 5)));

let number = "7316717653133062491922511967442657474235534919493496983520368542506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753123457977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257540920752963450"
console.log(solution(number), 99890, 'solution did not return correct value')
console.log(solution('1234567898765'), 98765, 'Failed when max 5 digits is at end of number')
console.log(solution("731674765"), 74765, 'Failed in overlapping test')