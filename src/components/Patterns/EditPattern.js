import React, { useState, useEffect } from "react";

//edit pattern function w/2 props
const EditPattern = ({ pattern, onPatternUpdate }) => {
  //use state hook for var name/cells
  const [name, setName] = useState(pattern.name);
  const [cells, setCells] = useState(JSON.stringify(pattern.cells));

  // Use useEffect to update local state when the pattern prop changes
  useEffect(() => {
    setName(pattern.name);
    setCells(JSON.stringify(pattern.cells));
  }, [pattern]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedPattern = {
      name,
      cells: JSON.parse(cells)
    };

    console.log('Pattern before fetch:', pattern); 
    console.log('Updated pattern:', updatedPattern); 

    //edit endpoint 
    fetch(`https://game-of-life-fnvg.onrender.com/api/patterns/${pattern.id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPattern),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data from response:', data); // Debugging line

        //updates data on successful submit 
        onPatternUpdate(data);
      });
  };

  //form with name and cell fields w/ handle submit on button click 
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Cells:
        <input type="text" value={cells} onChange={(e) => setCells(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditPattern;
