import React, { useState, useEffect, useCallback } from 'react';
import GameControlPanel from '../components/Games/GameControlPanel';
import GameRules from '../components/Games/GameRules';
import GameStatus from '../components/Games/GameStatus';
import GameGrid from '../components/Games/GameGrid';
import RandomSeeder from '../components/Games/RandomSeeder';
import PatternLibrary from '../components/Games/PatternLibrary';
import '../App.css';

const Game = () => {
    // STATES:
    //size of gamegrid 
    //grid is entire grid with cell states 
    //isRunning to indicate of game is running or paused 
    //generations tracks number of iterations since game start 
    const [size, setSize] = useState(25);
    const [grid, setGrid] = useState([]);
    const [isRunning, setIsRunning] = useState(false);
    const [generationsCount, setGenerationsCount] = useState(0);
    const [intervalSpeed, setIntervalSpeed] = useState(700);
    

    // GRID INITIALIZATION AND COMPUTATION:
    //generates empty(false) grid based on current size. Called when game is initialized or cleared 
    const generateEmptyGrid = useCallback(() => 
        Array.from({length: size}, () => Array(size).fill(false)), [size]
    );
    //state of next grid based on Game of Life rule set
    //usecallback so grid only rerenders on size change 
    const computeNextGrid = useCallback((oldGrid) => {
        //nested map to calculate state of each oldgrid cell in next generation 
        return oldGrid.map((row, i) => row.map((cell, j) => {
        //nested array iterations to calculate neighbors of cell using offsets -1, 0, 1
        //flatmap flattens array of arrays into 2d array 
            const neighbors = [-1, 0, 1].flatMap(dx => 
                [-1, 0, 1].map(dy => {
                    //checks if current cell, ignores it 
                    if (dx === 0 && dy === 0) return 0;
                    //flatmap returns single values for dx & dy instead of arrays of 3 values 
                    const x = i + dx;
                    const y = j + dy;

                    //checks if row index of neighbors is within grid boundaries 
                    return x >= 0 && x < size 
                    //checks if column index within boundaries 
                    && y >= 0 && y < size 
                    //checks if neighbor cell (x,y) is alive 
                    && oldGrid[x][y] ? 1 : 0;
                    //if conditions true then neighbor cell is alive and within grid boundaries so return 1
                })
                //reduce to accumulate total number of live nieghbors 
            ).reduce((a, b) => a + b);
        //live cell with 2 or 3 neighbors survives 
        //any dead cell with 3 neighbors becomes live cell 
            return neighbors === 3 || (cell && neighbors === 2);
        }));
    }, [size]);
    
    //initializes grid whenever size changes 
    useEffect(() => {
        setGrid(generateEmptyGrid());
    }, [size, generateEmptyGrid]);


    // HANDLERS:

    //toggles state of cell when clicked 
    const handleCellClick = useCallback((i, j) => {
        setGrid(grid => grid.map((row, x) => row.map((cell, y) => x === i && y === j ? !cell : cell)));
    }, []);
    
    //toggles pause/play
    const handlePlay = useCallback(() => {
        setIsRunning(isRunning => !isRunning);
    }, []);
    
    //stops game and clears grid 
    const handleClear = useCallback(() => {
        setIsRunning(false);
        setGrid(generateEmptyGrid());
        setGenerationsCount(0);
    }, [generateEmptyGrid]);

    const randomSeedCells = (numCells) => {
        const newGrid = grid.map((row) => row.map(() => false)); // Reset grid to all false
        let remainingCells = numCells;
    
        while (remainingCells > 0) {
          const x = Math.floor(Math.random() * size);
          const y = Math.floor(Math.random() * size);
    
          if (!newGrid[x][y]) {
            newGrid[x][y] = true;
            remainingCells--;
          }
        }
    
        setGrid(newGrid);
      };

    const handleLoadPattern = (pattern) => {
        const xOffset = Math.floor((size - pattern.size) / 2);
        const yOffset = Math.floor((size - pattern.size) / 2);
    
        const newGrid = generateEmptyGrid();
        for (let i = 0; i < pattern.size; i++) {
          for (let j = 0; j < pattern.size; j++) {
            newGrid[i + xOffset][j + yOffset] = pattern.cells[i][j];
          }
        }
    
        setGrid(newGrid);
      };
    


    // GAME LOGIC
    //computes next grid state & updates generations count every 700ms when game is running 
    useEffect(() => {
        if (!isRunning) return;
        const interval = setInterval(() => {
            setGrid(computeNextGrid);
            setGenerationsCount(prevCount => prevCount + 1);
        }, intervalSpeed);
        return () => clearInterval(interval);
    }, [isRunning, intervalSpeed, computeNextGrid]);

    //number of living cells in current grid 
    const livingCellsCount = grid.flat().filter(cell => cell).length;
    //size of each cell in grid
    const cellSize = window.innerWidth > 500 ? 500 / size : window.innerWidth / size;


    // RENDER
    return (
        <>
            <GameStatus 
                isRunning={isRunning} 
                livingCellsCount={livingCellsCount}
                generationsCount={generationsCount}
            />
            <div className="game-grid">
                {/* <GameRules /> */}
                

                <div className="game-main-content">
                    <RandomSeeder gridSize={size} onRandomSeed={randomSeedCells} />
                    <GameGrid 
                        grid={grid} 
                        handleCellClick={handleCellClick} 
                        cellSize={cellSize} 
                    />
                </div>
    
                <PatternLibrary onLoadPattern={handleLoadPattern} />
                
                <GameControlPanel 
                    isRunning={isRunning} 
                    onPlay={handlePlay} 
                    onClear={handleClear} 
                    onSizeChange={(newSize) => setSize(newSize)}
                    intervalSpeed={intervalSpeed} 
                    onIntervalSpeedChange={(newSpeed) => setIntervalSpeed(newSpeed)} 
                />
            </div>
        </>
    );
}

export default Game;
