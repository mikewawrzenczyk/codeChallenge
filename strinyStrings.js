/*
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.

*/

function stringy(size) {
    // if(typeof size !== 'string')
    //     return 
    // return '1'.repeat(size)
    let stringy = ''
    for(let i=1; i <=size; i++){
        if(!i % 2 ===0)
            stringy += '1'
        else
            stringy += '0'
    }
    return stringy
}

for(let i = 0; i < 10; ++i){
    let parameter = (Math.random() * 50 + 1) | 0;
    console.log(stringy(parameter).length, parameter, 'Wrong length on ' + parameter);
}