import React, { useState } from 'react';
import '../../styles/GameRules.css'

const GameRules = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <div className="rules-container">
            <button className="button" onClick={toggleModal}>Rules</button>

            {isModalOpen && (
                <div className="modal">
                    <h2>Conway's Game of Life</h2>
                    <ul>
                        <li>Any live cell with two or three live neighbors survives.</li>
                        <li>Any dead cell with three live neighbors becomes a live cell.</li>
                        <li>All other live cells die in the next generation.</li>
                    </ul>
                    <button className="button close-button" onClick={toggleModal}>Close</button>
                </div>
            )}
        </div>
    );
}

export default GameRules;
