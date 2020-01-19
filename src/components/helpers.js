// Variables to create cards 
const suits = [ '♠', '♣','♥', '♦'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let cards = [];
let poppedCard = '';

// Data structure to describe a card
class Card {
    constructor(key, value, suit, color) {
        this.key = key;
        this.value = value;
        this.suit = suit;
        this.color = color;
    }

}

// Create the deck of cards
export const createDeckOfCards = () => {
    let key = 0;
    values.forEach(value => {
        suits.forEach(suit => {
            const color = suit === '♥' || suit === '♦' ? 'red' : 'black';
            const card = new Card(key, value, suit, color);
            cards.push(card);
            key++;
        })
    })
    return cards;
}

// Shuffle deck of cards and restart if deck if empty
export const shuffleDeckOfcards = () => {
    const copyCards = cards;
    if (cards.length !== 0) {
        cards.sort(() => Math.random() - 0.5);
        // error handling
        if (copyCards !== cards) {
            console.log('Shuffling deck did not work, please try again!');
        }
        return cards
    }
    else {
        return createDeckOfCards()
    }
}

// Draw a card, and get the new cards
export const drawFromTheDeck = () => {
    poppedCard = cards.pop();
    return cards
}

// Draw a new card
export const getPoppedCard = () => {
    const { value, suit, color } = poppedCard;
    if (!value || !suit || !color || !drawFromTheDeck.key) {
        console.log("Draw function worked!")
    }
    else {
        console.log("Sorry, but we can draw a new card!")
    }
    return poppedCard;
}