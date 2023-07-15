import React, { useState } from "react"; 

//create pattern function w/ afterSubmit as props to refresh with header submit
const CreatePattern = ({afterSubmit, loggedInUser}) => {
  //three state variables 
  const [name, setName] = useState("");
  const [cells, setCells] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);
//called when form is submitted, makes POST request
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmit(true);
    //POST request endpoint 
    fetch("http://localhost:8000/api/patterns/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //includes name and cell data from form
      body: JSON.stringify({
        name,
        //cells parsed from string to JSON format
        cells: JSON.parse(cells),
      }),
    })
       //server response converted to json data using response.json
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //resets form, name, cells 
        setName(''); 
        setCells(''); 
        setFormSubmit(false);
        if(afterSubmit) { 
            afterSubmit(); 
        }
      });
  };
  //form rendered by CreatePattern component 
  return (
    //onSubmit event handler calling handSubmit function
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Cells:
        <input type="text" value={cells} onChange={(e) => setCells(e.target.value)} />
      </label>
      <button type="submit" disabled={formSubmit}>Submit</button>
    </form>
  );
};

export default CreatePattern;
