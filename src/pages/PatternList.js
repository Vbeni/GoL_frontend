import React, { useEffect, useState } from 'react';

const PatternList = () => {
    const [patterns, setPatterns] = useState([]);

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
        <div>
            <h1>Patterns</h1>
            {patterns.map((pattern, index) => (
                <div key={index}>
                    <h2>{pattern.name}</h2>
                    <pre>{JSON.stringify(pattern.cells, null, 2)}</pre>
                </div>
            ))}
        </div>
    );
}

export default PatternList;
