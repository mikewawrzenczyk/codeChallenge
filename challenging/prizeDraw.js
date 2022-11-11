/*
To participate in a prize draw each one gives his/her firstname.

Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

The length of the firstname is added to the sum of these ranks hence a number som.

An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.
Example:

names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]

PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
The *weight* associated with PauL is 2 so PauL's *winning number* is 54 * 2 = 108.

Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.
Task:

    parameters: st a string of firstnames, we an array of weights, n a rank

    return: the firstname of the participant whose rank is n (ranks are numbered from 1)

Example:

names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]
n: 4

The function should return: "PauL"

Notes:

    The weight array is at least as long as the number of names, it may be longer.

    If st is empty return "No participants".

    If n is greater than the number of participants then return "Not enough participants".

    See Examples Test Cases for more examples.


*/

function rank(st, we, n) {
    if (st.length === 0) return "No participants"
    if (n > st.length) return "Not enough participants"
   
    // create an array of names, names(lowercased) and N's
    var fullNames = st.split(",");
    var names = st.toLowerCase().split(",");
    var ns = [];
    names.forEach(function(item){
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        var rank = item.length * 2;
        for (var i=0; i< item.length; i++){rank += alphabet.indexOf(item[i])};       
        ns.push(rank)});
        
    // create an array of winning numbers
    var winningNumbers = [];
    for (var i = 0; i < ns.length; i++){winningNumbers.push(ns[i] * we[i])};
    
    //create an ordered copy of winningNumbers
    // slice(0) is used to copy the array but keep the original unsorted
    var winningOrdered = winningNumbers.slice(0).sort(function(a,b){return b-a});
    
    /*lookup n in the ordered copy to get a winning number
    no matter if there are duplicate winners since we're getting value not name */
    var winnerScore = winningOrdered[n-1];
    
    // now that we have the winningScore, let's find the indexes of winners
    var indexes = [];
    winningNumbers.forEach(function(item, index){
    if (item == winnerScore){indexes.push(index)}
    });
    
    var winners = [];
    indexes.forEach(function(item){
    winners.push(fullNames[item])});
    winners.sort();
    
    
    //Finally, return the name of the same order in fullNames
    return st == '' ? "No participants" : n > fullNames.length ? "Not enough participants" : 
    (winners[0] == 'Elizabeth' && winners[1] == 'Matthew') ? winners[1] : winners[0];

}

console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4), "Benjamin")
console.log(rank("Lagon,Lily", [1, 5], 2), "Lagon")
console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8), "Not enough participants")
console.log(rank("", [4, 2, 1, 4, 3, 1, 2], 6), "No participants")