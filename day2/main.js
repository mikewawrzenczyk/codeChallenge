/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

function check(a, x) {
  for(let i=0;i<a.length;i++){
    // console.log(a[i])
    if(a[i]=== x) return true
    if(i === (a.length-1)) return false 
  }
  // console.log(a[0])
//   a.forEach((element,index) => {
//   if(a[element] === x){
//   console.log(a[element])
//     return(true)
//   }
//   else return(false)
// })
}
//will need to re-factor to a forEach next time

console.log(check([66, 101], 66)) //true
console.log(check([101, 45, 75, 105, 99, 107], 107)) //true
console.log(check(['what', 'a', 'great', 'kata'])) //false

//more elegant solution
//const check = (a,x) => a.includes(x);
//this will evaluate true or false and I can use the array property .includes instead of doing the work from scratch!
//similar to this:
// function check(a,x){
//   return a.includes(x);
// };