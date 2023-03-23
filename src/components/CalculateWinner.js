export default function calculateWinner(squares) {
  const winLines = [
    [0, 1, 2],//first row
    [3, 4, 5], //middle row
    [6, 7, 8],//last row
    [0, 3, 6], //first column
    [1, 4, 7],//middle col
    [2, 5, 8], //last colum
    [0, 4, 8], // backward diagonal
    [2, 4, 6] // forward diagonal
  ];

  for (let i = 0; i < winLines.length; i++) {
    const [a, b, c] = winLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


