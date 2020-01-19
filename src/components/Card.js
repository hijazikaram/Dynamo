import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="row" >
                {this.props.cards.map((card, key) => (
                    <div className="col-2 card" style={card.suit === '♥' || card.suit === '♦' ? { color: 'red' } : { color: 'black' }} key={key}>
                        <div style={{ marginRight: '100%' }}>{card.suit}</div>
                        <div className="card-body" >
                            <h3 style={{ margin: 'auto' }}>{card.value} </h3>
                        </div>
                        <div style={{ transform: 'rotate(180deg)', marginLeft: '100%' }}>{card.suit}</div>
                    </div>
                ))}
            </div>
        );
    }

}

export default Card;