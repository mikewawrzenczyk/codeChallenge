/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

    Only lower case letters will be used (a-z). No punctuation or digits will be included.
    Performance needs to be considered.

Examples

scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

*/
function scramble(str1, str2) {
    //we are going to use a hashmap and compare them
    //set new hasmap variables
    let hashpipe = {}
    let hashpipe2 = {}
    //iterate through str1 check if a key exists in the hashmap object, if it doesn't create it otherwise add a value increment to the element of the hashmap
    // streamlined for loop
    //hashmap[element] = (hashmap[element] || 0) + 1
    for(const element of str1){
        hashpipe[element] = (hashpipe[element] || 0) + 1
    }
    for(const element of str2){
        if(!hashpipe2[element]){
            hashpipe2[element] = 0
        }
        hashpipe2[element]++
    }
    // console.log(hashpipe)
    // console.log(hashpipe2)
    // return false;
    //do a for in iteration of the object hashmap of second string, check to see if the key is undefined OR if the key of str1 hashmap is < key of str2 hashmap then return false otherwise we good
    for(key in hashpipe2){
        if(!hashpipe[key] || hashpipe[key] < hashpipe2[key]) return false     
    }
    return true
}

// scramble('rkqodlwwwwwwwwwrrrrrrr',           'world'     )
console.log(scramble('rkqodlw',           'world'      ), true );
console.log(scramble('cedewaraaossoqqyt', 'codewars'   ), true );
console.log(scramble('katas',             'steak'      ), false);
console.log(scramble('scriptjavx',        'javascript' ), false);
console.log(scramble('scriptingjava',     'javascript' ), true );
console.log(scramble('scriptsjava',       'javascripts'), true );
console.log(scramble('javscripts',        'javascript' ), false);
console.log(scramble('jscripts',          'javascript' ), false);
console.log(scramble('aabbcamaomsccdd',   'commas'     ), true );
console.log(scramble('commas',            'commas'     ), true );
console.log(scramble('sammoc',            'commas'     ), true )