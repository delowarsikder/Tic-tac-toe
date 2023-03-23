import { useState } from "react";
import classes from '../Styles/Square.module.css'

export default function Square({ value, onSquareClick }) {
  // const [value, setValue] = useState(null);
  // function handleClick() {
  // setValue('X');
  //   console.log(value)
  // }

  return (
    <>
      <button onClick={onSquareClick} className={classes.button}>{value}</button>
    </>
  );
}