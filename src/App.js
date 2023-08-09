import { useState } from 'react';
import './App.css';
import Square from './Square';

function App() {
  const [board,setBoard] = useState("","","","","","","","","")
  const [val,setVal] = useState("X");
  const chooseSquare = ()=>{

  }
  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square val={board[0]} chooseSquare={chooseSquare}/>
          <Square val={board[1]} chooseSquare={chooseSquare}/>
          <Square val={board[2]} chooseSquare={chooseSquare}/>
        </div>
        <div className="row">
          <Square val={board[3]} chooseSquare={chooseSquare}/>
          <Square val={board[4]} chooseSquare={chooseSquare}/>
          <Square val={board[5]} chooseSquare={chooseSquare}/>
        </div>
        <div className="row">
          <Square val={board[6]} chooseSquare={chooseSquare}/>
          <Square val={board[7]} chooseSquare={chooseSquare}/>
          <Square val={board[8]} chooseSquare={chooseSquare}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;