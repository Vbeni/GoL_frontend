import React from 'react';
import '../App.css';
//resusable cell component w/isAlive prop
function Cell({ isAlive }) {
  return (
    //applies alive or dead class to cell
    <div className={`cell ${isAlive ? "alive" : "dead"}`} />
  );
}

export default Cell;