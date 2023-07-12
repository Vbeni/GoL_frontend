import React, { useState } from 'react';

const EditPattern = ({ pattern, onPatternUpdate }) => {
  const [updatedPattern, setUpdatedPattern] = useState(pattern);

  const handleSubmit = (event) => {
    event.preventDefault();
    onPatternUpdate(updatedPattern);
  };


  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={updatedPattern.name} 
        onChange={(event) => setUpdatedPattern({ ...updatedPattern, name: event.target.value })} 
      />
      <button type="submit">Update Pattern</button>
    </form>
  );
};

export default EditPattern;
