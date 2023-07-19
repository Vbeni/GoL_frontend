import React from 'react';
import Cell from '../Cell';

const GameGrid = ({ grid, handleCellClick, cellSize }) => {
    return (
        <>
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, cellIndex) => (
                        <Cell 
                            key={cellIndex} 
                            isAlive={cell} 
                            onClick={() => handleCellClick(rowIndex, cellIndex)} 
                            cellSize={cellSize}
                        />
                    ))}
                </div>
            ))}
        </>
    );
}

export default GameGrid;
