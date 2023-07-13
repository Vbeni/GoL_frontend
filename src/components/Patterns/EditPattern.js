import React, { useState, useEffect } from "react";

const EditPattern = ({ pattern, onPatternUpdate }) => {
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

    fetch(`http://localhost:8000/api/patterns/${pattern.id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPattern),
    })
      .then((response) => response.json())
      .then((data) => {
        onPatternUpdate(data);
      });
  };

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
