import React from 'react'
import Tile from './Tile'
import Strike from './Strike'

const board = ({ tiles, onTileCick, playerTurn ,strikeClass }) => {
    return (
        <>
            <div className='board'>
                <Tile playerTurn={playerTurn} onClick={() => onTileCick(0)} value={tiles[0]} propz='right-border bottom-border' />
                <Tile playerTurn={playerTurn} onClick={() => onTileCick(1)} value={tiles[1]} propz='right-border bottom-border' />
                <Tile playerTurn={playerTurn} onClick={() => onTileCick(2)} value={tiles[2]} propz='bottom-border' />
                <Tile playerTurn={playerTurn} onClick={() => onTileCick(3)} value={tiles[3]} propz=' right-border bottom-border' />
                <Tile playerTurn={playerTurn} onClick={() => onTileCick(4)} value={tiles[4]} propz=' right-border bottom-border' />
                <Tile playerTurn={playerTurn} onClick={() => onTileCick(5)} value={tiles[5]} propz=' bottom-border' />
                <Tile playerTurn={playerTurn} onClick={() => onTileCick(6)} value={tiles[6]} propz=' right-border ' />
                <Tile playerTurn={playerTurn} onClick={() => onTileCick(7)} value={tiles[7]} propz=' right-border ' />
                <Tile playerTurn={playerTurn} onClick={() => onTileCick(8)} value={tiles[8]} />
                <Strike strikeClass={strikeClass} />
            </div>
        </>
    )
}

export default board