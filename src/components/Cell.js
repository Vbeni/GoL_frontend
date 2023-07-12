import React from 'react';
import './Cell.css'; // if you decide to use a CSS file for styling

function Cell({ isAlive }) {
  return (
    <div className={`cell ${isAlive ? "alive" : "dead"}`} />
  );
}

export default Cell;
