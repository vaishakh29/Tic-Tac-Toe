import React from 'react'

const Tile = ({ propz, value, onClick, playerTurn  }) => { //destructured here

    let hoverClass = null;
    if (value == null && playerTurn != null) {
        hoverClass = `${playerTurn.toLowerCase()}-hover`;
    }


    return (
        <div onClick={onClick} className={`tile ${propz} ${hoverClass}`}>{value}</div>
    )
}
export default Tile