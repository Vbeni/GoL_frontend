import React, { useState, useEffect } from 'react';

const RandomSeeder = ({ gridSize, onRandomSeed }) => {
  const [numCellsToSeed, setNumCellsToSeed] = useState(10); // Default number of cells to seed

  useEffect(() => {

    setNumCellsToSeed(10);
  }, [gridSize]);

  const handleNumCellsChange = (event) => {
    const value = event.target.value;
    setNumCellsToSeed(Math.min(Math.max(parseInt(value), 0), gridSize * gridSize)); // Ensure the value is within the grid size range
  };

  const handleSeedCells = () => {
    onRandomSeed(numCellsToSeed);
  };

  return (
    <div className="random-seeder">
      <label htmlFor="numCellsToSeed">Number of Cells to Seed:</label>
      <input
        type="number"
        id="numCellsToSeed"
        min="0"
        max={gridSize * gridSize}
        value={numCellsToSeed}
        onChange={handleNumCellsChange}
      />
      <button onClick={handleSeedCells}>Seed Cells</button>
    </div>
  );
};

export default RandomSeeder;
