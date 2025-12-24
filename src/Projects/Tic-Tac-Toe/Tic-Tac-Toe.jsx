import './ttt.css';
const { useState } = React;

export function Board() {
  const initialBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState('');

  function checkWinner(board) {
  for (let row of board) {
    if (row[0] !== '' && row.every(cell => cell === row[0])) {
      return row[0];
    }
  }

  for (let col = 0; col < 3; col++) {
    if (board[0][col] !== '' &&
        board[0][col] === board[1][col] &&
        board[1][col] === board[2][col]) {
      return board[0][col];
    }
  }

  if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return board[0][0];
  }
  if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return board[0][2];
  }
  return null
}

  function handleClick(row, col) {
    if (board[row][col] !== '') return

    const newBoard = board.map((r) => [...r]);
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer((prev) => prev === 'X' ? 'O' : 'X')

    const checkWin = checkWinner(newBoard)
    if (!newBoard.flat().includes('')) {
      setWinner('draw');
    }
    if (checkWin) {
      console.log(checkWin)
      setWinner(checkWin)
    }
  }

function reset() {
  setBoard(
    [['', '', ''],
    ['', '', ''],
    ['', '', ''],]);
  setCurrentPlayer('X');
  setWinner(null);
}



  return (
    <div className="container">
      <h1>Tic-Tac-Toe</h1>
      <p>{winner ? (winner==='draw' ? "It's a draw!" : 'Winner: ' + winner) : 'Next player: ' + currentPlayer}</p>
      <div className="row">
        <button disabled={winner} className="square" onClick={() => handleClick(0, 0)}>{board[0][0]}</button>
        <button disabled={winner} className="square" onClick={() => handleClick(0, 1)}>{board[0][1]}</button>
        <button disabled={winner} className="square" onClick={() => handleClick(0, 2)}>{board[0][2]}</button>
      </div>
      <div className="row">
        <button disabled={winner} className="square" onClick={() => handleClick(1, 0)}>{board[1][0]}</button>
        <button disabled={winner} className="square" onClick={() => handleClick(1, 1)}>{board[1][1]}</button>
        <button disabled={winner} className="square" onClick={() => handleClick(1, 2)}>{board[1][2]}</button>
      </div>
      <div className="row">
        <button disabled={winner} className="square" onClick={() => handleClick(2, 0)}>{board[2][0]}</button>
        <button disabled={winner} className="square" onClick={() => handleClick(2, 1)}>{board[2][1]}</button>
        <button disabled={winner} className="square" onClick={() => handleClick(2, 2)}>{board[2][2]}</button>
      </div>
      <button id='reset' onClick={reset}>Reset</button>
    </div>
  )
}
