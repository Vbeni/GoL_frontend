import React from 'react';
import GameRules from './GameRules';
import '../../styles/GameStatus.css';

const GameStatus = ({ isRunning, livingCellsCount, generationsCount }) => {
    return (
        <div className="game-status">
            <GameRules />
            <span>Status: {isRunning ? 'Running' : 'Paused'}</span>
            <span>Living Cells: {livingCellsCount}</span>
            <span>Generations: {generationsCount}</span>
        </div>
    );
};

export default GameStatus;
