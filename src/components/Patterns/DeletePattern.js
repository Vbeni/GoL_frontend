import React, { useState } from 'react';
//detePattern function w/2 props
const DeletePattern = ({ patternId, onPatternDelete }) => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    //handledelete function 
    const handleDelete = () => {
        //delete request endpoint 
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
      //for hiding/showing the delete confirmation 
      const showConfirmationDialog = () => {
        setShowConfirmation(true);
      };
    
      const hideConfirmationDialog = () => {
        setShowConfirmation(false);
      };
    
      return (
        //show confirmation on delete click 
        <>
          <button onClick={showConfirmationDialog}>Delete Pattern</button>
          {showConfirmation && (
            <div className="confirmation-dialog">
              <p>Are you sure you want to delete this pattern?</p>
              <button onClick={handleDelete}>Yes</button>
              <button onClick={hideConfirmationDialog}>No</button>
            </div>
          )}
        </>
      );
    };
export default DeletePattern;
