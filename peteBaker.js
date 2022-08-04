/*
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

*/
function cakes(recipe, available) {
    let cakesCounter= 0
    let recipeCounter = []
    let ingredientCounter = 0
    // console.log(Object.keys(available))
    // console.log(Object.values(available))
    //iterate through both objects nesting
    for(const [availableKey, availableValue] of Object.entries(recipe)){
        for(const [recipeKey, recipeValue] of Object.entries(available)){
            //if the value pairs match in each object then check to see if they can be divided
            // console.log(recipeKey)
            // console.log(availableKey)
            if(availableKey === recipeKey){
                //divide 
                if(recipeValue / availableValue > 1){
                    console.log(recipeKey)
            console.log(availableKey)
                    ingredientCounter++
                    // console.log(availableValue)
                    // console.log(recipeValue)
                    // console.log(availableValue / recipeValue)
                    // recipeCounter.push(Math.round(availableValue / recipeValue))
                    recipeCounter.push(Math.floor(recipeValue/availableValue))
                }
                // else{
                //     return 0
                // }
            }
        }
    }
    console.log(recipeCounter)
    console.log(`Recipe keys that match ${recipeCounter.length} and value length is ${Object.keys(available).length}`)
    // console.log(`available ${available}`)
    // console.log(`recipe ${recipe}`)
    if(Object.keys(available).length < Object.keys(recipe).length)
        return 0
    
    recipeCounter.sort((a,b) => a-b)
    return recipeCounter[0]
    // console.log(ingredientCounter)
    
    // return cakesCounter
}

let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};


console.log(cakes(recipe, available), 2);

recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};
console.log(cakes(recipe, available), 0);


recipe = {crumbles: 5, chocolate: 4, nuts: 5};
available = {flour: 4,
    eggs: 9,
    oil: 7,
    milk: 3,
    apples: 8,
    sugar: 12,
    cream: 13,
    pears: 9,
    butter: 2,
    nuts: 20,
    chocolate: 9,
    cocoa: 15,
    crumbles: 4};
console.log(cakes(recipe, available), 0);