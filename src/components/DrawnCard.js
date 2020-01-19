import React from 'react';
import PropTypes from "prop-types";

const DrawnCard = (props) => {
    return (
        <div>
            {props.cards.length > 0 ?
                <div>
                    <h3>Drewed</h3>
                    <h3 style={{ color: props.drawnCard.color }}>{props.drawnCard.value} {props.drawnCard.suit}</h3>
                </div>
                :
                <h5>Please click Restart to draw a new card.</h5>
            }
        </div>
    );
}

DrawnCard.propTypes = {
    drawnCard: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    cards: PropTypes.array
};
export default DrawnCard;