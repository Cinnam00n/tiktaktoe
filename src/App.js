

function Square({ value }) {
  return <button className="square">{value}</button>;
  }
  
  function SquareRow({ values }) {
    return (
      <>
      <div className="board-row">
        <Square value={values[0]}/>
        <Square value={values[1]}/>
        <Square value={values[2]}/>
      </div>
      </>
    )
  }
  
  
  export default function Board() {
    return (
      <>
      <SquareRow values={[0,1,2]}/>
      <SquareRow values={[0,1,2]}/>
      <SquareRow values={[0,1,2]}/>
      </>
    )
  }
  