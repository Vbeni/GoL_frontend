import React from 'react';
import '../App.css';
//resusable cell component w/3 props
function Cell({ isAlive, onClick, cellSize }) {
  //cellSize prop defines width/height of cell
  const cellStyle = {
    width: `${cellSize}px`,
    height: `${cellSize}px`
  };
  //renders a cell as a div 
  //classname changes based on alive or dead state 
  //style is set based on cellStyle
  //if cell is clicked , onClick is called to change cell state 
  return (
    <div 
    className={`cell ${isAlive ? "alive" : "dead"}`} 
    style={cellStyle}
    onClick={onClick} 
    />
  );
}

export default Cell;
