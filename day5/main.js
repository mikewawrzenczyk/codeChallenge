//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    return(x.replace(/ /g, ""))
}

/*
Using replace() method with regex: The replace() method is used to replace a specified string with another string. It takes two parameters, first is the string to be replaced and the second parameter is the string replaced with. The second string can be given as empty string so that the empty space to be replaced.

The first parameter is given a regular expression with a space character (” “) along with the global property. This will select every occurrence of space in the string and it can then be removed by using an empty string in the second parameter. This will remove all the spaces in the original string.
*/