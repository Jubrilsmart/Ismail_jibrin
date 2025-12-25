import Return from '../../components/Return';
import './ttt.css';
import { useState } from 'react';

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
    <div className='bg-light dark:bg-dark text-dark dark:text-light absolute inset-0 flex'>
      <Return />
      <div className="text-center p-20 rounded-lg  mx-auto flex flex-col justify-center items-center w-screen my-45 lg:scale-120">
        <h1 className='mb-2.5 text-3xl font-bold'>Tic-Tac-Toe</h1>
        <p className='text-xl font-bold mb-5'>
          {winner ? (winner==='draw' ? "It's a draw!" : 'Winner: ' + winner) : 'Next player: ' + currentPlayer}</p>
        <div className='w-70 mt-8 sm:w-100'>
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
        </div>
        <button id='reset' onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Board