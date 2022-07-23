/*
Task

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
Examples

[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

function sortArray(array) {
    //get the odds into an array
    //sort odds array
    //put in each sorted odd number from odd array into original array but replace each odd, leave each even
    const oddsOnly = array.filter(value => value % 2 !=0).sort((a,b) => a-b)
    // return oddsOnly
    // console.log(oddsOnly)
    let returningArray =[]
    for(let i=0;i<oddsOnly.length;i++){
        for(let j=0;j<array.length;j++){
            if(array[j] % 2 !=0){
                // console.log(oddsOnly[i])
                array[j] = oddsOnly[i]
                // j++
            }
        }
    }

    return array


}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]),[]);