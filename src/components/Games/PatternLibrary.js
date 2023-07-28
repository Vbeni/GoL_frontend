import React from 'react';
import '../../styles/PatternLibrary.css';

const PatternLibrary = ({ onLoadPattern }) => {
  const patterns = [
    {
      name: 'Glider',
      size: 3,
      cells: [
        [false, true, false],
        [false, false, true],
        [true, true, true],
      ],
    },
    {
        name: 'Spaceship',
        size: 5,
        cells: [
          [false, true, true, true, true],
          [true, false, false, false, true],
          [false, false, false, false, true],
          [true, false, false, true, false],
          [false, false, false, false, false],
        ],
      },
    
      {
        name: 'Tumbler',
        size: 7,
        cells: [
          [false, true, true, false, true, true, false],
          [false, true, true, false, true, true, false],
          [false, false, true, false, true, false, false],
          [true, false, true, false, true, false, true],
          [true, false, true, false, true, false, true],
          [true, true, false, false, false, true, true],
          [false, false, false, false, false, false, false],
        ],
      },
    {
      name: 'Penta-decathlon',
      size: 10,
      cells: [
        [false, true, false],
        [true, false, true],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [true, false, true],
        [false, true, false],
      ],
    },
    {
        name: 'Diehard',
        size: 8,
        cells: [
          [false, false, false, false, false, false, true, false],
          [true, true, false, false, false, false, false, false],
          [false, true, false, false, false, true, true, true],
          [false, false, false, false, false, false, false, false],
          [false, false, false, false, false, false, false, false],
          [false, false, false, false, false, false, false, false],
          [false, false, false, false, false, false, false, false],
          [false, false, false, false, false, false, false, false],
        ],
      },
      {
        name: 'Acorn',
        size: 7,
        cells: [
          [false, true, false, false, false, false, false],
          [false, false, false, true, false, false, false],
          [true, true, false, false, true, true, true],
          [false, false, false, false, false, false, false],
          [false, false, false, false, false, false, false],
          [false, false, false, false, false, false, false],
          [false, false, false, false, false, false, false],
        ],
      },
      
  ];

  const handleSelectPattern = (event) => {
    const selectedPatternName = event.target.value;
    const selectedPattern = patterns.find((pattern) => pattern.name === selectedPatternName);
    onLoadPattern(selectedPattern);
  };

  return (
    <div className="pattern-library">
      <h2>Pattern Library</h2>
      <select className="pattern-dropdown" onChange={handleSelectPattern}>
        <option value="">Select a pattern</option>
        {patterns.map((pattern, index) => (
          <option key={index} value={pattern.name}>
            {pattern.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PatternLibrary;
