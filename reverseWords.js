/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
*/
function spinWords(string){
    //turn  string into an array of words
    let arrayString = string.split(' ')
    let reversedString =[]
    //iterate through new array string
    for(word of arrayString){
        //if the word is longer than 4 characters push the word into a new array with the reverse method
        if(word.length>4){
            reversedString.push(word.split('').reverse().join(''))
        }
        //otherwise push the word as is into the new array
        else{
            reversedString.push(word)
        }
    }
    return reversedString.join(' ')
}

console.log(spinWords("Welcome"), "emocleW");
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");
console.log(spinWords("This is another test"), "This is rehtona test");
console.log(spinWords("You are almost to the last test"), "You are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");