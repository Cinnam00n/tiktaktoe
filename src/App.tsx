import { useState } from 'react'; 

function Square({value, onSquareClick} : {
  value: string | null,
  onSquareClick: void
}) {

  // old state management intrinsic to Square component
  // const [value, setValue] = useState<string | null>(null);
  // function handleClick() {
  //   setValue("X");
  // }

  return <button className="square">{value}</button>;
  }

  
  export default function Board() {

    const [squares, setSquares] = useState<null[][] | string[][]>(Array(3).fill(Array(3).fill(null)))

    function handleClick() : void {
      
    }

    return (
      <>
      <div className="board-row">
        <Square value={squares[0][0]} onSquareClick={handleClick()} />
        <Square value={squares[0][1]} />
        <Square value={squares[0][2]} />
      </div>
      <div className="board-row">
        <Square value={squares[1][0]} />
        <Square value={squares[1][1]} />
        <Square value={squares[1][2]} />
      </div>
      <div className="board-row">
        <Square value={squares[2][0]} />
        <Square value={squares[2][1]} />
        <Square value={squares[2][2]} />
      </div>
    </>
    )
  }
  