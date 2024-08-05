import React from 'react'
import GameData from './GameData'

const Reset = ({ gameState, onReset }) => {
    if (gameState === GameData.inProgress) {
        return;
    }
    return <div onClick={onReset} className='reset-button'>Reset</div>
}

export default Reset