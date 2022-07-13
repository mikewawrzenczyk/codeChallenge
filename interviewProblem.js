/*
https://www.youtube.com/watch?v=yju4zwKSriI
Senior Software Engineer Mock Technical Interview (Coding/Algorithms in JavaScript)
Having to do with strings.

You will be provided a dictionary of words as input

Input:
"cat", "car", "bar"

Fill in one function called setup 

function setup(input)

function isInDict(word)
 return true if word is in input dictionary, false otherwise

goal is to do as much work as possible in setup function

setup(["cat", "car", "bar"]) //given list of words
then
isInDict("cat") //true
isIndict("bat") //false

store in global variable or a class
*/

class Dictionary{
    constructor(wordsArray){
        this.dict = new Set(wordsArray)
        //using a set is kind of cheating
    }

    isInDict(word){
        // console.log(this.dict)
        return this.dict.has(word)
    }

}

const test = new Dictionary(["cat", "car", "bar"])

console.log(test.isInDict('cat')) //true
console.log(test.isInDict('bar')) //true
console.log(test.isInDict('don')) //false
console.log(test.isInDict('cargo')) //false