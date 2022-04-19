import { Link } from "react-router-dom";
import { Image } from "primereact/image";
import TicTacToeMains from "../Assets/TicTacToeMain.png";
import "./TicTacToe.css";

export function TicTacToeIntro() {
  return (
    <div className="Main">
      <Image src={TicTacToeMains} width={"250px"} alt="brain" />

      <h1>Tic Tac Toe</h1>
      <div className="paraDiv">
        <p>
          "Tic Tac Toe is a game for two players, X and O, who take turns
          marking the spaces in a 3×3 grid. The player who succeeds in placing
          three of their marks in a horizontal, vertical, or diagonal row wins
          the game."
        </p>
      </div>
      <Link to="/tictactoegame" className="Button">
        Tic Tac Toe Game
      </Link>
    </div>
  );
}
