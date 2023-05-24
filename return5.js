/*
Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

Solution: the trick was to just use a string and return the length, this way a number or math etc. was not used.
*/

function unusualFive() {
    return 'fiver'.length
}