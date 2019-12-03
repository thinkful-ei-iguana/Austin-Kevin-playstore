import React from 'react';

function Game(props) {
    return (
        <div className="game">
            <h2>{ props.App }</h2>
            <div className="game_genre">{ props.Genres }</div>
            <div className="app_rating">{ props.Rating }</div>
        </div>
    );
}

export default Game