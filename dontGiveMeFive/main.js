/*
Don't give me five!

In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!

I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/
function dontGiveMeFive(start, end)
{
  //create an array of the region by using start and end as anchors
  let region =[]
  let counter = 0
  for(let i=start; i <=end; i++){
    region[counter] = i
    counter++
  }
  //re-use counter and iterate through array, turn each integer into a string and compare to a 5, if it contains a 5 don't do anything, if it is -1 increment the counter.
  counter =0
  for(let i=0; i<region.length; i++){
    let arrayElement = region[i] + ''
    if(arrayElement.indexOf('5') === -1)
      counter++
  }
  return counter
}
/* Less code solution
  for (var cnt = 0;s <= e;++s)
    (s+'').includes('5') || cnt++
  return cnt 
}
*/


console.log(dontGiveMeFive(1,9), 8);
console.log(dontGiveMeFive(4,17), 12);