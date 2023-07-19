import React from 'react';
import GridSizeSelector from './GridSizeSelector';
import GameControls from './GameControls';

const GameControlPanel = ({ isRunning, onPlay, onClear, onSizeChange }) => {
    return (
        <div className="game-controls">
            <GridSizeSelector onSizeChange={onSizeChange} />
            <GameControls isRunning={isRunning} onPlay={onPlay} onClear={onClear} />
        </div>
    );
};

export default GameControlPanel;
