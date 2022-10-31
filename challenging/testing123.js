/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


*/

function numbering(arr){
    if (arr.length === 0) return []
    let returnString = []
    let j = 1
    for(i in arr){
        returnString.push(`${j}: ${arr[i]}`) 
        j++
    }
    return returnString
}

console.log(numbering(["a", "b", "c"]),["1: a", "2: b", "3: c"])

//map one liner
//let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)
