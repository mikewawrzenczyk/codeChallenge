/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

function high(x){
    //split sentence into words
    const words = x.split(' ')
    //kepe track of high score and word associated with the high score
    let highScore = 0
    let highScoreWord = ''
    //iterate through words array
    for(element of words){
        //make a score of words based on a spread operatore reduce method accumulating based on the charCodeAt ascii table
        const newScore = [...element].reduce((acc, c) => acc + (c.charCodeAt(0)-96), 0)
        //check if this is the newest high score if so set the new high score and keep track of word.
        if(newScore>highScore){
            highScore =newScore
            highScoreWord = element
        }      
    }
    return highScoreWord
}

/*better solution
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
*/

console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano'); 
console.log(high('take me to semynak'), 'semynak');   
console.log(high('aa b'), 'aa');
console.log(high('b aa'), 'b');
console.log(high('bb d'), 'bb');
console.log(high('d bb'), 'd');
console.log(high('aaa b'), 'aaa');