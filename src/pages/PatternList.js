import React, { useEffect, useState } from 'react';
import Cell from "../components/Cell"
import CreatePattern from '../components/Patterns/CreatePattern';

const PatternList = () => {
    const [patterns, setPatterns] = useState([]);
    const [showCreate, setShowCreate] = useState(false);  

    useEffect(() => {
        // get patterns from API
        fetch('http://localhost:8000/api/patterns/')
            .then(response => response.json())
            .then(data => {
                setPatterns(data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []); 

    return (
        <div className="pattern-grid">
            <button onClick={() => setShowCreate(!showCreate)}>Create Pattern</button>
      {showCreate && <CreatePattern />} 
          {patterns.map((pattern) => (
            <div key={pattern.id}>
              <h2>{pattern.name}</h2>
              {pattern.cells.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                  {row.map((cell, cellIndex) => (
                    <Cell key={cellIndex} isAlive={cell === 1} />
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    };
    
    export default PatternList;
