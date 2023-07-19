import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <p>
                Conway's Game of Life, also known as the "Game of Life", is a cellular automaton devised by the British mathematician John Horton Conway in 1970.
                Learn more on <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" rel="noopener noreferrer">Wikipedia</a>.
            </p>
            <p>&copy; {new Date().getFullYear()} BeniV. All rights reserved.</p>
        </div>
    );
}

export default Footer;
