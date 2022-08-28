/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/
function capitalize(s){
    let capitalString = []
    let lowercaseString = []
    //iterate through the string and if element is even add capital letter to capital array and lowercase to lowercase array vice versa on the else
    for(let index in s){
        if(index % 2 === 0){
            capitalString.push(s[index].toUpperCase())
            lowercaseString.push(s[index].toLowerCase())
        }
        else{
            capitalString.push(s[index].toLowerCase())
            lowercaseString.push(s[index].toUpperCase())
        }
    }
    // return `[ '${capitalString.join('')}', '${lowercaseString.join('')}' ]`
    return [capitalString.join(''), lowercaseString.join('')]
};

console.log(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);