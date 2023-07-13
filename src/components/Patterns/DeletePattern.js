import React from 'react';

const DeletePattern = ({ patternId, onPatternDelete }) => {
    const handleDelete = () => {

        fetch(`http://localhost:8000/api/patterns/${patternId}/`, {
            method: 'DELETE'
        })
        .then(() => {
            onPatternDelete(patternId);
        })
        .catch(err => {
            console.error(err);
        });
      };
      return (
        <button onClick={handleDelete}>Delete Pattern</button>
      );
    };

export default DeletePattern;
