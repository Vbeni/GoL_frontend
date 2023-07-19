import React, { useState, useEffect, useCallback } from 'react';
import GameControls from '../components/Games/GameControls';
import GameRules from '../components/Games/GameRules';
import GameStatus from '../components/Games/GameStatus';
import GridSizeSelector from '../components/Games/GridSizeSelector';
import GameGrid from '../components/Games/GameGrid';
import '../App.css';

const Game = () => {
    // STATES
    const [size, setSize] = useState(25);
    const [grid, setGrid] = useState([]);
    const [isRunning, setIsRunning] = useState(false);
    const [generationsCount, setGenerationsCount] = useState(0);

    // GRID INITIALIZATION AND COMPUTATION
    const generateEmptyGrid = useCallback(() => 
        Array.from({length: size}, () => Array(size).fill(false)), [size]
    );

    const computeNextGrid = useCallback((oldGrid) => {
        return oldGrid.map((row, i) => row.map((cell, j) => {
            const neighbors = [-1, 0, 1].flatMap(dx => 
                [-1, 0, 1].map(dy => {
                    if (dx === 0 && dy === 0) return 0;
                    const x = i + dx;
                    const y = j + dy;
                    return x >= 0 && x < size && y >= 0 && y < size && oldGrid[x][y] ? 1 : 0;
                })
            ).reduce((a, b) => a + b);

            return neighbors === 3 || (cell && neighbors === 2);
        }));
    }, [size]);

    useEffect(() => {
        setGrid(generateEmptyGrid());
    }, [size, generateEmptyGrid]);


    // HANDLERS
    const handleCellClick = useCallback((i, j) => {
        setGrid(grid => grid.map((row, x) => row.map((cell, y) => x === i && y === j ? !cell : cell)));
    }, []);

    const handlePlay = useCallback(() => {
        setIsRunning(isRunning => !isRunning);
    }, []);

    const handleClear = useCallback(() => {
        setIsRunning(false);
        setGrid(generateEmptyGrid());
        setGenerationsCount(0);
    }, [generateEmptyGrid]);


    // GAME LOGIC
    useEffect(() => {
        if (!isRunning) return;
        const interval = setInterval(() => {
            setGrid(computeNextGrid);
            setGenerationsCount(prevCount => prevCount + 1);
        }, 700);
        return () => clearInterval(interval);
    }, [isRunning, computeNextGrid]);


    const livingCellsCount = grid.flat().filter(cell => cell).length;
    const cellSize = 500 / size;

    // RENDER
    return (
        <>
            <GameStatus 
                isRunning={isRunning} 
                livingCellsCount={livingCellsCount}
                generationsCount={generationsCount}
            />
            <div className="game-grid">
                <GameRules />
                <GameGrid grid={grid} handleCellClick={handleCellClick} cellSize={cellSize} />
                <div className="game-controls">
                    <GridSizeSelector 
                        onSizeChange={(newSize) => {
                            setSize(newSize);
                        }}
                    />
                    <GameControls 
                        isRunning={isRunning} 
                        onPlay={handlePlay} 
                        onClear={handleClear} 
                    />
                </div>
            </div>
        </>
    );
}

export default Game;
