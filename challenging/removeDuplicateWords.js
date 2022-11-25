/*
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"


*/

const removeConsecutiveDuplicates = s => {
    //split the string by words, then filter out each word that is not the same as the previous word in the array then join them
    return s.split(' ').filter((word, index, array) => word != array[index-1]).join(' ')
}

console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"), "alpha beta gamma delta alpha beta gamma delta")