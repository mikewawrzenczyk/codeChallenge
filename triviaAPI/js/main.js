//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('#button').addEventListener('click', getTrivia)
document.querySelector('#buttonAnswer').addEventListener('click', answer)


let apiRequestURL = 'https://jservice.io/api/random'
let clueAnswer = ''
getTrivia()
console.log(clueAnswer)
function answer(){
    document.querySelector('#answer').innerText = `What is ${clueAnswer}?`
}

function clue(){

}

function getTrivia(){
    
        fetch(`${apiRequestURL}`)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
            console.log(data)
            document.querySelector('#question').innerText = `${data[0].question}`
            document.querySelector('#answer').innerText = ``
            clueAnswer= data[0].answer
            })
            .catch(err => {
                console.log(`error ${err}`)
            });
    
}

// function getCard(){
//     fetch(`https://deckofcardsapi.com/api/deck/${currentDeck}/draw/?count=2`)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {
//         console.log(data)
        
//         document.querySelector('#player1Card').innerText = `${data.cards[0].value} OF ${data.cards[0].suit}`
//         document.querySelector('#player2Card').innerText = `${data.cards[1].value} OF ${data.cards[1].suit}`
//         document.querySelector('#player1').src = data.cards[0].image
//         document.querySelector('#player2').src = data.cards[1].image
//         resultWinner(convertToNum(data.cards[0].value), convertToNum(data.cards[1].value))
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });
    
// }
// function resultWinner(player1,player2){
//     if(player1 > player2)
//         document.querySelector('h3').innerText = 'Player 1 Wins'
//     else if(player2 > player1)
//         document.querySelector('h3').innerText = 'Player 2 Wins'
//     else
//         document.querySelector('h3').innerText = 'WAR!!!!'
// }

// function convertToNum(val){
//     switch(val){
//         case "ACE": return 14
//         case "KING": return 13
//         case "QUEEN": return 12
//         case "JACK": return 11
//         default: return Number(val)
//     }
// }