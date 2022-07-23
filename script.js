import Deck from "./deck.js"

const computerCardSlot = document.querySelector(".computer-card-slot")
const playerCardSlot = document.querySelector(".player-card-slot")
const computerDeckElement = document.querySelector(".computer-deck")
const playerDeckElement = document.querySelector(".player-deck")
const text = document.querySelector(".text")

let playerDeck, computerDeck
startgame()

function startgame() {
    const deck = new Deck()
    deck.shuffle()

    const deckMidPoint = Math.ceil(deck.numberOfCards / 2)
    playerDeck = new Deck(deck.cards.slice(0, deckMidPoint))
    computerDeck = new Deck(deck.cards.slice(deckMidPoint, deck.numberOfCards))


    cleanBeforeRound()

}
function cleanBeforeRound() {
    computerCardSlot.innerHTML = ''
    playerCardSlot.innerHTML = ''
    text.innerHTML = ''
    updateDeckCount()
}
function updateDeckCount() {
    computerDeckElement.innerText = computerDeck.numberOfCards
    playerDeckElement.innerText = playerDeck.numberOfCards
}


// computerCardSlot.appendChild(deck.cards[0].getHTML())