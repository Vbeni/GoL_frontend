import React from 'react';
import GridSizeSelector from './GridSizeSelector';
import GameControls from './GameControls';
import InputSlider from 'react-input-slider';
import '../../styles/GameControlPanel.css'

const GameControlPanel = ({ isRunning, onPlay, onClear, onSizeChange, intervalSpeed, onIntervalSpeedChange }) => {
    return (
        <div className="game-controls">
          
            <GridSizeSelector onSizeChange={onSizeChange} />
            <GameControls isRunning={isRunning} onPlay={onPlay} onClear={onClear} />
            <div className="slider-container">
               <label>Interval Speed:</label>
               <InputSlider
               axis="x"
               x={2000 - intervalSpeed} 
               xmin={100}
               xmax={2000}
               xstep={100}
               onChange={({ x }) => onIntervalSpeedChange(2000 - x)} 
        />
        <div>{intervalSpeed} ms</div>
      </div>
    </div>
  );
};


export default GameControlPanel;
