import React from 'react';

const DeletePattern = ({ patternId, onPatternDelete }) => {
  const handleDelete = () => {
    
    onPatternDelete(patternId);
  };

  return (
    <button onClick={handleDelete}>Delete Pattern</button>
  );
};

export default DeletePattern;
