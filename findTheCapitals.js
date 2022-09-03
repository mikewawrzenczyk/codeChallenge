/*
Instructions

Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
Example

Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

*/

var capitals = function (word) {
    captialLetterIndeces =[]
    for(let index in word){
        if(word[index] === word[index].toUpperCase())
            captialLetterIndeces.push(Number(index))
    }
    return captialLetterIndeces
};

console.log(capitals('CodEWaRs'), [0,3,4,6] );