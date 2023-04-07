import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  }

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Select an option</button>
      {isOpen && (
        <ul>
          <li onClick={() => handleOptionClick('option1')}>Option 1</li>
          <li onClick={() => handleOptionClick('option2')}>Option 2</li>
          <li onClick={() => handleOptionClick('option3')}>Option 3</li>
        </ul>
      )}
      {selectedValue && <p>Selected value: {selectedValue}</p>}
    </div>
  );
}


export default Dropdown();
