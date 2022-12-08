/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

var uniqueInOrder=function(iterable){
    //iterable can be a string or an array
    //case sensitive
    //check for type, if it is a string you can split it, otherwise you don't split it and proceed as is
    if (typeof iterable === "string")
    {
        return iterable.split('').filter((current, index, array) => current != array[index-1])
    }
    return iterable.filter((current, index, array) => current != array[index-1])
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'),['A', 'B', 'C', 'D', 'A', 'B'])
console.log(uniqueInOrder('ABBCcAD'),['A', 'B', 'C', 'c', 'A', 'D'])
console.log(uniqueInOrder([1,2,2,3,3]),[1,2,3])