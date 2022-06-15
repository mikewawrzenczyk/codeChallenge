/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

function count (string) {  
    //checking string is valid or not
    if( string.length === 0 ){
        return {}
    }

    // A map (in JavaScript, an object) for the character=>count mappings
    let counts = {};

    // Misc vars
    let ch, index, len, count;

    // Loop through the string...
    for (index = 0, len = string.length; index < len; ++index) {
        // Get this character
        ch = string.charAt(index); // Not all engines support [] on strings

        // Get the count for it, if we have one; we'll get `undefined` if we
        // don't know this character yet
        count = counts[ch];

        // If we have one, store that count plus one; if not, store one
        // We can rely on `count` being falsey if we haven't seen it before,
        // because we never store falsey numbers in the `counts` object.
        counts[ch] = count ? count + 1 : 1;
    }
    return counts
     
}

/* Better solution
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}
*/

console.log(count("aba"), { a: 2, b: 1 }); 
console.log(count(""), {});  