import React, { useState, useEffect, useCallback } from 'react';
import Cell from '../components/Cell';
import GameControls from '../components/Games/GameControls';
import '../App.css';

//size prop for default grid size 
const Game = ({ size = 25 }) => {
//generates 2D empty grid filled with false values 
  const generateEmptyGrid = useCallback(
    () => Array.from({length: size}, () => Array(size).fill(false)), [size]
  );

//Grid state and updater 
  const [grid, setGrid] = useState(generateEmptyGrid);
//State to track game status 
  const [isRunning, setIsRunning] = useState(false);

//Toggle cell state (alive or dead) on click 
  const handleCellClick = useCallback((i, j) => {
    setGrid(grid => grid.map((row, x) => row.map((cell, y) => x === i && y === j ? !cell : cell)));
  }, []);

//Toggle game status
  const handlePlay = useCallback(() => {
    setIsRunning(isRunning => !isRunning);
  }, []);

//resets game grid 
  const handleClear = useCallback(() => {
    setIsRunning(false);
    setGrid(generateEmptyGrid());
  }, [generateEmptyGrid]);

//function stored in memory not recreated every render, only recreated if size changes 
  const computeNextGrid = useCallback((oldGrid) => {
    //nested map function , outer map i, inner map j 
    return oldGrid.map((row, i) => row.map((cell, j) => {
        //nested flatmap uses array to get position of 8 neighbors by looping over dx & dy
        //flatmap returns 2D array of neighbor states while map would return array of arrays 
      const neighbors = [-1, 0, 1].flatMap(dx => [-1, 0, 1].map(dy => {
        //combination (0,0) is not a neighbor but the current cell 
        if (dx === 0 && dy === 0) return 0;
        //coordinates of neighbors determined by adding relative changes to current cell (i,j)
        const x = i + dx;
        const y = j + dy;
        //checks if within grid boundaries 
        return x >= 0 && x < size && y >= 0 && y < size && oldGrid[x][y] ? 1 : 0;
      })).reduce((a, b) => a + b);
    //if cell has 3 neighbors then alive
    //if cell is alive and has 2 neighbors then alive
      return neighbors === 3 || (cell && neighbors === 2);
    }));
  }, [size]);
//run game in intervals, update grid every second if game is running 
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setGrid(computeNextGrid);
    }, 700);
    return () => clearInterval(interval);
  }, [isRunning, computeNextGrid]);

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
      <GameControls 
        isRunning={isRunning} 
        onPlay={handlePlay} 
        onClear={handleClear} 
      />
    </div>
  );
}

export default Game;
