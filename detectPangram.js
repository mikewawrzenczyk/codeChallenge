/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

function isPangram(string){
    //initialize variables for alphabet and lowercase which takes the stribng lower cases it and removes all spaces
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let lowercase = string.toLowerCase().replace(/\s/g, '')
    //iterate through alphabet string letter by letter, if using an indexOf to search through string you cannot find a letter that returns a false flag meaning the string is not a pangram
    for(let i = 0; i < alphabet.length; i++){
        if(lowercase.indexOf(alphabet[i]) === -1){
          return false;
        }
    }
    //if loop finds every letter in alphabet and gets here it means true or pangram is true.
    return true
}

//one line solution with reg ex
//return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;

    var string = "The quick brown fox jumps over the lazy dog."
    console.log(isPangram(string), true)

    var string = "This is not a pangram."
    console.log(isPangram(string), false)