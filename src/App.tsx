import { MouseEventHandler, useState } from 'react'; 

enum GameResult {
  X,
  O,
  Draw
}

function Square({value, onSquareClick} : {
  value: string | null,
  onSquareClick: React.MouseEventHandler<HTMLButtonElement>; 
  }) {

  // old state management intrinsic to Square component
  // const [value, setValue] = useState<string | null>(null);
  // function handleClick() {
  //   setValue("X");
  // }

  return <button className="square" onClick={onSquareClick}>{value}</button>;
  }

  
  export default function Board() {

    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [squares, setSquares] = useState<null[][] | string[][]>( Array(3).fill(null).map(() => Array(3).fill(null)))

    function handleClick(i: number, j:number)
    {
    if (squares[i][j]) {
      return;
    }
    let newSquares = structuredClone(squares);
    if (xIsNext == true) {
      newSquares[i][j] = "X"
    } else {
      newSquares[i][j] = "O"
    }
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    };

    return (
      <>
      <div className="board-row">
        <Square value={squares[0][0]} onSquareClick={() => handleClick(0,0)}/>
        <Square value={squares[0][1]} onSquareClick={() => handleClick(0,1)}/>
        <Square value={squares[0][2]} onSquareClick={() => handleClick(0,2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[1][0]} onSquareClick={() => handleClick(1,0)}/>
        <Square value={squares[1][1]} onSquareClick={() => handleClick(1,1)}/>
        <Square value={squares[1][2]} onSquareClick={() => handleClick(1,2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[2][0]} onSquareClick={() => handleClick(2,0)}/>
        <Square value={squares[2][1]} onSquareClick={() => handleClick(2,1)}/>
        <Square value={squares[2][2]} onSquareClick={() => handleClick(2,2)}/>
      </div>
    </>
    )
  }

  function calculateWinner(squares: (string | null)[][]): string | null {
    // Check columns and rows
    for (let j = 0; j < 3; j++) {
      // Check column j
      if (
        squares[0][j] &&
        squares[0][j] === squares[1][j] &&
        squares[0][j] === squares[2][j]
      ) {
        return squares[0][j];
      }
  
      // Check row j
      if (
        squares[j][0] &&
        squares[j][0] === squares[j][1] &&
        squares[j][0] === squares[j][2]
      ) {
        return squares[j][0];
      }
    }
  
    // Check diagonals
    if (
      squares[0][0] &&
      squares[0][0] === squares[1][1] &&
      squares[0][0] === squares[2][2]
    ) {
      return squares[0][0];
    }
  
    if (
      squares[0][2] &&
      squares[0][2] === squares[1][1] &&
      squares[0][2] === squares[2][0]
    ) {
      return squares[0][2];
    }
  
    // Check for draw or continue game
    if (squares.flat().every((square) => square !== null)) {
      return "draw"; // All squares filled, no winner
    }
  
    return null; // Game is not yet finished
  }
   
  