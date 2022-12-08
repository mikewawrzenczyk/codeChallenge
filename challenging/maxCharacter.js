/*
Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

No String or Array Methods (well brute force it first, but then no methods)! 
*/

function max(string){
    let hashmap = {},
        count = 0,
        maxChar = null

    //create hashmap
    for(let letter of string){
        hashmap[letter] = (hashmap[letter] || 0) + 1
    }

    //look through hashmap
    //conditional checking for higher value, if the value is higher than create new highest count and save the char key
    for(const char in hashmap){
        if(hashmap[char] > count){
            count = hashmap[char]
            maxChar = char
        }
    }

    //return the max key
    return maxChar
    
}

console.log(max("Hello World!"), "l");
