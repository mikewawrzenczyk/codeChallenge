//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getCocktail)

function getCocktail(){
    const cocktail = document.querySelector('#cocktailValue').value
    console.log('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+cocktail)
    console.log(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}