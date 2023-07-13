import React, { useEffect, useState } from 'react';
import Cell from "../components/Cell"
import CreatePattern from '../components/Patterns/CreatePattern';
import EditPattern from '../components/Patterns/EditPattern';
import DeletePattern from '../components/Patterns/DeletePattern';

const PatternList = () => {
    const [patterns, setPatterns] = useState([]);
    const [showCreate, setShowCreate] = useState(false);  
    const [patternToEdit, setPatternToEdit] = useState(null);

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
    
    const handlePatternUpdate = (updatedPattern) => {
      
        setPatterns(patterns.map(pattern => pattern.id === updatedPattern.id ? updatedPattern : pattern));
        setPatternToEdit(null);
      };
    
      const handlePatternDelete = (patternId) => {
      
        setPatterns(patterns.filter(pattern => pattern.id !== patternId));
      };

      
    return (
        <div className="pattern-grid">
      <button onClick={() => setShowCreate(!showCreate)}>Create Pattern</button>
      {showCreate && <CreatePattern />} 
      {patterns.map((pattern) => (
        <div key={pattern.id}>
          <h2 onClick={() => setPatternToEdit(pattern)}>{pattern.name}</h2>
          {patternToEdit === pattern && 
            <EditPattern pattern={pattern} onPatternUpdate={handlePatternUpdate} />
          }
          <DeletePattern patternId={pattern.id} onPatternDelete={handlePatternDelete} />
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
