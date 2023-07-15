import React, { useEffect, useState } from 'react';
import Cell from "../components/Cell"
import EditPattern from '../components/Patterns/EditPattern';
import DeletePattern from '../components/Patterns/DeletePattern';


const PatternList = ({ refreshKey }) => {
  //state variables 
    const [patterns, setPatterns] = useState([]);
    const [patternToEdit, setPatternToEdit] = useState(null);
    
    //fetch patterns from api when refresh key or component mounts 
    useEffect(() => {
        fetch('http://localhost:8000/api/patterns/')
            .then(response => response.json())
            .then(data => {
              //data retrived and then stored in set patterns
                setPatterns(data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [refreshKey]); 
    //for pattern updates
    const handlePatternUpdate = (updatedPattern) => {
        //maps over patterns and updates/replaces pattern with matchin id 
        setPatterns(patterns.map(pattern => pattern.id === updatedPattern.id ? updatedPattern : pattern));
        setPatternToEdit(null);
      };
      //for pattern delete
      const handlePatternDelete = (patternId) => {
        //filters pattern with matching id from state var 
        setPatterns(patterns.filter(pattern => pattern.id !== patternId));
      };

      
    return (
        <div className="pattern-grid">
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
