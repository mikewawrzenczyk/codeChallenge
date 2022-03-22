/*

Translate border-left-width to borderLeftWidth
importance: 5

Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

P.S. Hint: use split to split the string into an array, transform it and join back.

*/
function camelize(str){
    //split the argument str into an array by delimeter '-'
    let noDashes = str.split('-')
    //  start a new string with the first index of the array, we do not want this word to be capitalized so we add it now
    let newString= noDashes[0]
    //iterate through the new noDashes array
    noDashes.forEach((element, index) =>{
            //if statement saying to only do this if the index is not 0 which is the first word we want to skip
            if(index != 0){
                //split the array element into another array consiting of the letters of the word
                let firstLetter = element.split('')    
                //take the first element which is the first letter of the word and capitalize it
                firstLetter[0] = firstLetter[0].toUpperCase()
                //joing the array of single letters into an element
                firstLetter = firstLetter.join('')
                //our string for output already had the first indexed word, now we add this new capitalized word to it
                newString += firstLetter
                //this is for prosperity but we are assigning the current index as the new element with a capitalized letter in case we need it later
                noDashes[index] = firstLetter
            }
           
        })
        //output our string!
        console.log(newString)
}

camelize("background-color")
camelize("list-style-image") 
camelize("-webkit-transition")
camelize("this-beat-is-off-the-chain-what-do-you-think?")

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';