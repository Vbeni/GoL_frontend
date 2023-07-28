import React, { useState, useEffect } from 'react';
import Slider from 'react-input-slider';
import '../../styles/RandomSeeder.css'

const RandomSeeder = ({ gridSize, onRandomSeed }) => {
  const [numCellsToSeed, setNumCellsToSeed] = useState(10); // Default number of cells to seed

  useEffect(() => {
    setNumCellsToSeed(10);
  }, [gridSize]);

  const handleSeedCells = () => {
    onRandomSeed(numCellsToSeed);
  };

  return (
    <div className="random-seeder">
      <label className="label">Number of Cells to Seed:</label>
      <div className="slider-container">
        <Slider
          axis="x"
          x={numCellsToSeed}
          xmin={0}
          xmax={gridSize * gridSize}
          xstep={1}
          onChange={({ x }) => setNumCellsToSeed(x)}
          styles={{
            active: {
              background: '#007bff',
            },
            thumb: {
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: '#007bff',
            },
          }}
        />
        <div className="value">{numCellsToSeed}</div>
      </div>
      <button onClick={handleSeedCells} className="button">
        Seed Cells
      </button>
    </div>
  );
};

export default RandomSeeder;
