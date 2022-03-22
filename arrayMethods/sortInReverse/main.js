/*
Sort in decreasing order
importance: 4

let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10
*/
function compareDescending(a, b) {
    if (a < b) return 1; // if the first value is less than the second
    if (a == b) return 0; // if values are equal
    if (a > b) return -1; // if the first value is greater than the second
}

let arr = [5, 2, 1, -10, 8, 200, 200134];

arr.sort(compareDescending)

alert( arr ); // 8, 5, 2, 1, -10