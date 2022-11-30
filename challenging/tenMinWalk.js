/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

    Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


*/
function isValidWalk(walk) {
    if (walk.length == 10){
        //you need a 10 minute walk so anything with more or less than 10 coordinates will not work
        //we must check that the direction ends you back in the same place
        //if we have the same number of opposite coordinate directions should be OK
        //create a hashmap to store key values of each direcion in the array
        let hashmap = {}
        for(let direction of walk){
            hashmap[direction] = (hashmap[direction] || 0) + 1
        }
        //check to see if key value pairs of north and south are equal as well as east and west are equal in value (or if not existent undefined)
        return (hashmap.n === hashmap.s && hashmap.w === hashmap.e) ? true : false
    }
    else
        return false
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
console.log(isValidWalk(['n','s','e','w','n','s','e','w','n','s']), 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');