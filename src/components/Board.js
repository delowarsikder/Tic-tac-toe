import Square from "./Square";
import CalculateWinner from './CalculateWinner'
import classes from '../Styles/Board.module.css'
import { useState } from "react";
import calculateWinner from "./CalculateWinner";

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))
  const winner = CalculateWinner(squares);
  console.log(winner);
  console.log(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  }
  else {
    status = "Next Player: " + (xIsNext ? "X" : "0");
  }

  function handleClick(i) {
    const nextSquare = squares.slice();
    if (squares[i] || winner) {
      return;
    }
    if (xIsNext) {
      nextSquare[i] = "X";
    }
    else {
      nextSquare[i] = "0";
    }
    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  }

  return (
    <div className={classes.all}>
      <div className={classes.status}>{status}</div>

      <div className={classes.boardRow}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className={classes.boardRow}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className={classes.boardRow}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}


