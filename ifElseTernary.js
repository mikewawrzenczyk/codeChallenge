/*
Task:

Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
number of hotdogs 	price per unit (cents)
n < 5 	100
n >= 5 and n < 10 	95
n >= 10 	90

You can use if..else or ternary operator to complete it.

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code and pass this kata.

*/

function saleHotdogs(n){
    return (n<5) ? n * 100 : n>9 ? n* 90 : n *95
}

console.log(saleHotdogs(  1),  100);
console.log(saleHotdogs(  4),  400);
console.log(saleHotdogs(  5),  475);
console.log(saleHotdogs(  9),  855);
console.log(saleHotdogs( 10),  900);
console.log(saleHotdogs(100), 9000);
