import React from 'react';

const DrawnCard = (props) => {
    return (
        <div>
            {props.cards.length > 0 ?
                <div>
                    <h3>Drewed</h3>
                    <h3 style={props.drawnCard.suit === '♥' || props.drawnCard.suit === '♦' ? { color: 'red' } : { color: 'black' }}>{props.drawnCard.value} {props.drawnCard.suit}</h3>
                </div>
                :
                <h5>Please click Restart to draw a new card.</h5>
            }
        </div>
    );
}

export default DrawnCard;