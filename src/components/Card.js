import React from 'react';
import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <div className="row" >
            {props.cards.map((card, key) => (
                <div className="col-2 card" style={{ color: card.color }} key={key}>
                    <div style={{ marginRight: '100%' }}>{card.suit}</div>
                    <div className="card-body" >
                        <h3 style={{ margin: 'auto' }}>{card.value} </h3>
                    </div>
                    <div style={{ transform: 'rotate(-180deg)', marginLeft: '100%' }}>{card.suit}</div>
                </div>
            ))}
        </div>
    );
}

Card.propTypes = {
    key: PropTypes.number,
    value: PropTypes.string,
    suit: PropTypes.string,
    color: PropTypes.string
};

export default Card;