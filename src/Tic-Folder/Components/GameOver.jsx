import React from 'react'
import GameData from './GameData'
const GameOver = ({ gameState }) => {

    switch (gameState) {
        case GameData.inProgress:
            return <></>;
        case GameData.playerXWins:
            return <div className='game-over'>X Wins</div>;
        case GameData.playerOWins:
            return <div className='game-over'>O Wins</div>;
        case GameData.draw:
            return <div className='game-over'>Game Draw</div>;
        default:
            return <></>;

    }

}

export default GameOver