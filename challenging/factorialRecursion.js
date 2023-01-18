/*
##1 - Factorial

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

5! = 5 * 4 * 3 * 2 * 1 = 120.

The value of 0! is 1.

#Your task

You have to create the function factorial that receives n and returns n!. You have to use recursion.
*/

//base case is n < 2 then we know that its 1 or 0

const factorial = n => {
    if(n<2)
        return 1
    return n * factorial(n-1)
}

/*

5 * factorial(5-1)
    4 * factorial(4-1)
        3 * factorial(3-1)
            2 * factorial(2-1)
            1

5 * 4 * 3  * 2 * 1
*/

console.log(factorial(0), 1);

console.log(factorial(1), 1);

console.log(factorial(2), 2);

console.log(factorial(3), 6);