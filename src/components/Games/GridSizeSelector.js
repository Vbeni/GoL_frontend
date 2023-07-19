import React, { useState } from 'react';
import '../../styles/GridSizeSelector.css'

const GridSizeSelector = ({ onSizeChange }) => {
    const predefinedSizes = [25, 50, 75, 100];
    const [customSize, setCustomSize] = useState(25);
    const [errorMsg, setErrorMsg] = useState('');

    const handleDropdownChange = (e) => {
        const size = parseInt(e.target.value, 10);
        onSizeChange(size);
        setErrorMsg('');  
    };

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
            <label>
                Select grid size: 
                <select onChange={handleDropdownChange}>
                    {predefinedSizes.map(size => (
                        <option key={size} value={size}>
                            {size} x {size}
                        </option>
                    ))}
                </select>
            </label>

            <br />

            <label>
                Or enter custom size: 
                <input type="number" value={customSize} onChange={handleInputChange} />
            </label>
            <button onClick={handleSubmit}>Apply</button>
            {errorMsg && <p className="error-message">{errorMsg}</p>} 
        </div>
    );
};

export default GridSizeSelector;
