import React from 'react';

class DrawnCard extends React.Component {
    render() {
        return (
            <div>
                {this.props.cards.length > 0 ?
                    <div>
                        <h3>Drewed</h3>
                        <h3 style={this.props.drawnCard.suit === '♥' || this.props.drawnCard.suit === '♦' ? { color: 'red' } : { color: 'black' }}>{this.props.drawnCard.value} {this.props.drawnCard.suit}</h3>
                    </div>
                    :
                    <h5>Please click Restart to draw a new card.</h5>
                }
            </div>
        );
    }
}

export default DrawnCard;