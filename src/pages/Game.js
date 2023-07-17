import React, { useState } from 'react';
import Cell from '../components/Cell';
import '../App.css';

const Game = () => {
  const size = 10;
  const [grid, setGrid] = useState(() => {
    const initialGrid = [];
    for(let i = 0; i < size; i++) {
      initialGrid.push(Array(size).fill(false));
    }
    return initialGrid;
  });

  const handleCellClick = (i, j) => {
    const newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[i][j] = !grid[i][j];
    setGrid(newGrid);
  };

  return (
    <div className="game-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => (
            <Cell 
              key={cellIndex} 
              isAlive={cell} 
              onClick={() => handleCellClick(rowIndex, cellIndex)} 
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Game;
