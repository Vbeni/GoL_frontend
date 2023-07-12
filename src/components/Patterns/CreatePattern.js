import React, { useState } from "react";

const CreatePattern = () => {
  const [name, setName] = useState("");
  const [cells, setCells] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:8000/api/patterns/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        cells,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
        <input type="text" value={cells} onChange={(e) => setCells(JSON.parse(e.target.value))} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreatePattern;
