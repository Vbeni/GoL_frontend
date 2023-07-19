import React from 'react';
import '../App.css';
//resusable cell component w/isAlive prop
function Cell({ isAlive, onClick, cellSize }) {
  const cellStyle = {
    width: `${cellSize}px`,
    height: `${cellSize}px`
  };
  return (
    //applies alive or dead class to cell
    <div className={`cell ${isAlive ? "alive" : "dead"}`} 
    style={cellStyle}
    onClick={onClick} />
  );
}

export default Cell;
