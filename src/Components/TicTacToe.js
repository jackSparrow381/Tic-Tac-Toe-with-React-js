import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Square } from "./Square";
import { initialState } from "../Constant/Constant";
import "./TicTacToe.css";

export function TicTacToe() {
  // declaring states
  const [gameState, updateGameState] = useState(initialState);
  const [isXChance, updateIsXChance] = useState(false);
  const [winnerMessage, updateWinnerMessage] = useState("");
  const [showWinner, updateShowWinner] = useState(true);

  // function to update the game state

  const onSquareClicked = (index) => {
    let strings = Array.from(gameState);
    strings[index] = isXChance ? "O" : "X";
    updateGameState(strings);
    updateIsXChance(!isXChance);
  };

  //  button disabled by Index
  const isDisabledByIndex = (index) => {
    if (gameState[index] === "") {
      return false;
    }
    return true;
  };

  // function to reset the game
  const gameReset = () => {
    updateGameState(initialState);
    updateIsXChance(false);
    updateShowWinner(true);
  };

  // function to check if there is a winner
  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log(
      "Class: App, Function: checkWinner ==",
      gameState[0],
      gameState[1],
      gameState[2]
    );
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  // function to check if there is a tie
  const checkTie = () => {
    if (gameState.every((x) => x !== "") && !checkWinner()) {
      return true;
    }
    return false;
  };

  const winner = checkWinner();
  const tie = checkTie();

  useEffect(() => {
    if (winner) {
      updateShowWinner(false);
      updateWinnerMessage(`${winner} is the winner!`);

      setTimeout(() => {
        updateGameState(initialState);
        updateWinnerMessage("");
        updateShowWinner(true);
      }, 2000);
    }
    if (tie) {
      updateShowWinner(false);
      updateWinnerMessage("It's a tie!");

      setTimeout(() => {
        updateGameState(initialState);
        updateWinnerMessage("");
        updateShowWinner(true);
      }, 2000);
    }
  }, [gameState]);

  return (
    <div className="app-header">
      <div className="InputContainer">
        <p className="PlayersParagraph">
          Player One Is "X" and Player Two is "O"
        </p>
      </div>

      {showWinner ? (
        <p className="heading-text">Player {isXChance ? "O" : "X"}'s turn</p>
      ) : (
        <p className="heading-text"> {winnerMessage} </p>
      )}

      <div className="Board">
        {gameState.map((square, index) => (
          <Square
            className="Board-Square"
            key={index}
            value={square}
            onClick={() => onSquareClicked(index)}
            disabled={isDisabledByIndex(index)}
          />
        ))}
      </div>
      <Button className="clear-button" onClick={gameReset}>
        Clear Board
      </Button>
    </div>
  );
}
