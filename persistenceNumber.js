/*

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)


*/

function persistence(num) {
    //break the number up into an array
    let arrayNum = Array.from(String(num), Number)
    //check to see if the persistence is already 0 by array length condition
    if(arrayNum.length === 1)
        return 0
    let multipliedArray
    let counter = 0
    //multiply each member of the array into a new array
    //we want to have first run then check to see if the length of the current array is greater than 1, if so we go again
    do{
        //reduce array  by multipliying each element in it
        multipliedArray = arrayNum.reduce((acc, current) => acc * current)
        //convert the multiplied array into an actual array and mutate the original array
        arrayNum = Array.from(String(multipliedArray), Number)
        //incremement multiplacative persistent counter
        counter++
    }while(arrayNum.length > 1)
    //check to see if the length of the array is 1, if not keep going
    return counter
 }
/* Cleaner solution
function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}
*/


console.log(persistence(39),3);
console.log(persistence(4),0);
console.log(persistence(25),2);
console.log(persistence(999),4);