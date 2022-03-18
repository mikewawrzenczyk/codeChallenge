/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/
function countPositivesSumNegatives(input) {
    let returnArray =[]
        let positives = 0
        let negativeSum = 0
         if(input === null || input.length === 0){
            let emptyArray = []   
            return emptyArray
        }
        //check to see if array is NULL or empty
        //return array could of used
        // return []
        input.forEach(x => {
            //loop through array
          if(Math.sign(x) ===  -1)
          //sum negative if Math.sign returns a negative AKA a negative number is confirmed
              negativeSum += x
          else if(x !== 0)
          //sum positives
            positives++
             
        })
        returnArray.push(positives)
        returnArray.push(negativeSum)
        //push the data into array as per instructions
        return returnArray
    }