import React, { useEffect, useState } from 'react';
import Board from '../Components/Board';
import Tile from '../Components/Tile';
import GameOver from '../Components/GameOver';
import GameData from '../Components/GameData';
import Reset from '../Components/Reset';

import GameOverSound from '../Assets/sound/GameOverSound.wav';
import ClickSound from '../Assets/sound/ClickSound.wav'

const GamePage = () => {

    const gameOverSound = new Audio(GameOverSound);
    gameOverSound.volume = 0.2
    const clickSound = new Audio(ClickSound);
    clickSound.volume = 0.5


    const PLAYER_X = "X";
    const PLAYER_O = "O";
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [strikeClass, setStrikeClass] = useState();

    const [gameState, setGameState] = useState(GameData.inProgress)

    const winnningCombo = [
        { combo: [0, 1, 2], strikeClass: "strike-row-1" },
        { combo: [3, 4, 5], strikeClass: "strike-row-2" },
        { combo: [6, 7, 8], strikeClass: "strike-row-3" },

        { combo: [0, 3, 6], strikeClass: "strike-column-1" },
        { combo: [1, 4, 7], strikeClass: "strike-column-2" },
        { combo: [2, 5, 8], strikeClass: "strike-column-3" },

        { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
        { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
    ];

    const handelTileCLick = (index) => {
        if (gameState !== GameData.inProgress) {
            return;
        } //to prevent no more button clicks aftr game over

        if (tiles[index] !== null) {
            return;
        }

        // console.log("index no : ", index);

        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);
        if (playerTurn === PLAYER_X) {
            setPlayerTurn(PLAYER_O);
        } else {
            setPlayerTurn(PLAYER_X);
        }

    }

    function checkWinner(tiles, setStrikeClass, setGameState) {

        for (const { combo, strikeClass } of winnningCombo) {
            // const { combo, strikeClass } = winnningComb;  //destructuring here 

            const tileValue1 = tiles[combo[0]];
            const tileValue2 = tiles[combo[1]];
            const tileValue3 = tiles[combo[2]];

            if (
                tileValue1 != null &&
                tileValue1 === tileValue2 &&
                tileValue1 === tileValue3
            ) {
                setStrikeClass(strikeClass);

                if (tileValue1 === PLAYER_X) {
                    setGameState(GameData.playerXWins);
                } else {
                    setGameState(GameData.playerOWins);
                }
                return; //to make the draw visible
            }


        }


        const allFilled = tiles.every((tile) => tile !== null);
        if (allFilled) {
            setGameState(GameData.draw);
        }


    }

    const handelReset = () => {
        setGameState(GameData.inProgress);
        setTiles(Array(9).fill(null));
        setPlayerTurn(PLAYER_X);
        setStrikeClass(null);
    }



    useEffect(() => {
        checkWinner(tiles, setStrikeClass, setGameState);
    }, [tiles])


    useEffect(() => {
        if (tiles.some((tile) => tile != null)) {
            clickSound.play();
        }
    }, [tiles])

    useEffect(() => {
        if (gameState !== GameData.inProgress) {
            gameOverSound.play();
        }
    }, [gameState])


    return (
        <>
            <h1>Tic Tac Toe </h1>
            <Board strikeClass={strikeClass} playerTurn={playerTurn} tiles={tiles} onTileCick={handelTileCLick} />
            <GameOver gameState={gameState} />
            <Reset gameState={gameState} onReset={handelReset} />
        </>
    )
}

export default GamePage