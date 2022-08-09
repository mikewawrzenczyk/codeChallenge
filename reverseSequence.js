/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/
const reverseSeq = n => {
    let sequenceArray = []
    for(let i = n; i > 0; i--)
    {
        sequenceArray.push(i)
    }
    return sequenceArray
};

//One Liner
//return Array(n).fill(0).map((e, i) => n - i );

console.log(reverseSeq(5), [5, 4, 3, 2, 1]);