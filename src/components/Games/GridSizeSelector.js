import React, { useState } from 'react';
import '../../styles/GridSizeSelector.css'

const GridSizeSelector = ({ onSizeChange }) => {
    const [customSize, setCustomSize] = useState(25);
    const [errorMsg, setErrorMsg] = useState('');


    const handleInputChange = (e) => {
        let inputSize = parseInt(e.target.value, 10);
        if (isNaN(inputSize)) {
            inputSize = 0;
        }

        if (inputSize > 100) {
            setErrorMsg('Please select a size smaller than 100');
        } else {
            setErrorMsg('');  
        }

        setCustomSize(inputSize);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (customSize <= 100) {
            onSizeChange(customSize);
        }
    };

    return (
        <div className="grid-size-selector">
         

            <br />

            <label>
                Custom Size: 
                <input 
                    type="range" 
                    min="10" 
                    max="100" 
                    value={customSize} 
                    onChange={handleInputChange} 
                />
                {customSize} x {customSize}
            </label>

         
          
            <button onClick={handleSubmit}>Apply</button>
            {errorMsg && <p className="error-message">{errorMsg}</p>} 
        </div>
    );
};

export default GridSizeSelector;
