import React from 'react';
import { createDeckOfCards, shuffleDeckOfcards, drawFromTheDeck, getPoppedCard } from './helpers'
import Card from './Card';
import DrawnCard from './DrawnCard';

class Deck extends React.Component {

    state = {
        cards: createDeckOfCards()
    }

    render() {
        return (
            <div>
                {this.state.cards.length === 0 ?
                    <div>
                        <h3>oh oh, no more cards</h3><br />
                        <button className="btn btn-success" onClick={() => this.setState({ cards: shuffleDeckOfcards() })}>Restart</button>
                    </div>
                    :
                    <div>
                        <button className="btn" onClick={() => this.setState({ cards: shuffleDeckOfcards() })}>Shuffle the deck</button>
                        <button className="btn" onClick={() => { this.setState({ cards: drawFromTheDeck() }) }}>Draw a new card</button>
                    </div>
                }
                <DrawnCard drawnCard={getPoppedCard()} cards={this.state.cards} />
                <h1><Card cards={this.state.cards} /></h1>
            </div>
        );
    }
}

export default Deck;