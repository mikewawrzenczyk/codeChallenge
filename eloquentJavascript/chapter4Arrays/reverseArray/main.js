/*
Reversing an array

Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
*/

//working on the optional assingment, can't figure it out now will move on and come back.

// Your code here.
function reverseArray(arr){
    let reversed = []
    for(let i=0;i<arr.length;i++){
        reversed.unshift(arr[i])
        //add the element of argument array i into the first element of the new array reversed
    }
    return reversed
}

function reverseArrayInPlace(arr){
    //Reverse the input array by swapping the first and last elements, then the second and second last elements, then the third and third last elements. Middle of an odd array you can leave alone since the middle will stay.
    let halfArray = Math.floor(arr.length / 2)
    //you only need to iterate through half the array. you get half the arraw and round down
    for(let i=0;i<=halfArray;i++){
        let placeHolder = arr[arr.length -1 -i] 
        arr[arr.length -1 -i] = arr[i]
        arr[i] = placeHolder
    }
    return arr
}

console.log(reverseArray(["A", "B", "C", "D", "E" , "F", "G"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

