/*

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

*/
function rowSumOddNumbers(n) {
    return n*n*n
}
/*
the problem is solved by mathematically reducing the equations of the Triangular Numbers Sequence with the Sum of Odd Numbers.

First, we know that given any triangle of numbers, the number of numbers (note: the number of items constituting the number triangle) is equivalent to n(n+1)/2 given the number of rows. Second, we know that given a sequence of odd integers starting at 1, the sum of the series is exactly n^2 where n is the number of integers in the sequence.

Now let x = the number of rows of the triangle. The question gives x and only wants the sum (z) of that last row.

Therefore we start by finding the number of items in the triangle, using the first formula x, so let s1 = x(x+1)/2. Then we find the sum of all odd numbers of the whole triangle using a = s1^2. Then we find the number of items in the triangle minus the last row, so using y = x - 1. Thus we have s2 = y(y+1)/2 = (x-1)x/2. The sum of the numbers of that entire smaller triangle is b = s2^2. Now we find the sum of the current row which is (z) = a - b.

This would suffice as an answer. But if you expand a - b mathematically (write this on a piece of paper) and reduce it algebraically, you will eventually reach the equation z = x * x * x = x^3.
*/

console.log(rowSumOddNumbers(1)) //1
console.log(rowSumOddNumbers(42)) //74088