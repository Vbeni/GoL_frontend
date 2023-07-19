import React, { useState } from 'react';

const GameRules = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <div>
            <button onClick={toggleModal}>Rules</button>

            {isModalOpen && (
                <div className="modal">
                    {
                        'rules n stuff'
                    }
                </div>
            )}.
        </div>
    );
}

export default GameRules;
