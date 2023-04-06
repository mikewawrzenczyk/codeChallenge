/*
This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.
Example:

evaporator(10, 10, 5) -> 29

Note:

Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.

*/

function evaporator(content, evap_per_day, threshold){ 
    /*
    In this function, we first initialize the current percentage to 100%, the number of days to 0, and then we loop until the current percentage falls below the threshold. In each iteration, we reduce the current percentage by the percentage of foam or gas lost every day, and we increment the number of days. Finally, we return the number of days it took for the evaporator to reach the threshold percentage.
    */
    let current_percentage = 100;
    let days = 0;
    
    while (current_percentage > threshold) {
      current_percentage -= current_percentage * (evap_per_day / 100);
      days++;
    }
    
    return days;
}

console.log(evaporator(10,10,10),22);
console.log(evaporator(10,10,5),29);