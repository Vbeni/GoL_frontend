import React from 'react';
import '../../styles/GameControls.css';


const GameControls = ({ isRunning, onPlay, onClear }) => {
  return (
    <div className="button-container">
      <button className="control-button" onClick={onPlay}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button className="control-button" onClick={onClear}>
        Clear
      </button>
    </div>
  );
}

export default GameControls;

