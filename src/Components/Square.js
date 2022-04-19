import { Button } from "primereact/button";
import "./TicTacToe.css";

export function Square(props) {
  const Classes = props.className ? ` ${props.className} square` : "square";
  return (
    <div>
      <Button
        disabled={props.disabled}
        className={Classes}
        onClick={props.onClick}
      >
        {props.value}
      </Button>
    </div>
  );
}
