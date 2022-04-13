//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getCard)

let startedDeck = false
let currentDeck = ''
getDeck()


function getDeck(){
    // const cocktail = document.querySelector('#cocktailValue').value
    // console.log('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+cocktail)
    // console.log(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
    if(!startedDeck){
        startedDeck = true
        fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
            console.log(data)
            console.log(data.deck_id)
            currentDeck = data.deck_id
            // document.querySelector('h2').innerText = data.drinks[0].strDrink
            // document.querySelector('img').src = data.drinks[0].strDrinkThumb
            // document.querySelector('h3').innerText = data.drinks[0].strInstructions
            })
            .catch(err => {
                console.log(`error ${err}`)
            });
    }
}

function getCard(){
// const cocktail = document.querySelector('#cocktailValue').value
// console.log('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+cocktail)
// console.log(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
    fetch(`https://deckofcardsapi.com/api/deck/${currentDeck}/draw/?count=1`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(data)
        
        document.querySelector('h2').innerText = `${data.cards[0].value} OF ${data.cards[0].suit}`
        document.querySelector('img').src = data.cards[0].image
        // document.querySelector('h3').innerText = data.drinks[0].strInstructions
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    
}