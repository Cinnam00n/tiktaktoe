import { MouseEventHandler, useState } from 'react'; 


type coordinates = {
  x: number,
  y: number,
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

    const [squares, setSquares] = useState<null[][] | string[][]>( Array(3).fill(null).map(() => Array(3).fill(null)))

    function handleClick(i: number, j:number)
    {
    let newSquares = structuredClone(squares);
    newSquares[i][j] = "X"
    setSquares(newSquares);
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
  