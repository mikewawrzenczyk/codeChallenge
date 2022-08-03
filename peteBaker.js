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
    let maximumCakes = []
    for(const item in recipe){
      let numberOfCakes = 0
      while(available[item] >= recipe[item]){
        let temp = available[item] - recipe[item]
        available[item] = temp
        numberOfCakes++
      }
      maximumCakes.push(numberOfCakes)
    }
    return(Math.min(...maximumCakes))
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
    crumbles: 4,
    cocoa: 15,};
console.log(cakes(recipe, available), 0);