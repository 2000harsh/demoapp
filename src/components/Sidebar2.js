import './Sidebar.css';
import { useState } from 'react';
function Sidebar2()
{
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  }

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  }

    return(
        <>
            <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="./img/d1.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Kickstart your DeCapp with pre-built templates</h1>
        <p class="lead">Our marketplace has a wide variety of templates that you can use to kickstart your DeCapp, or use as a reference to make your own!</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-success btn-lg px-4 me-md-2" onClick={handleButtonClick}>Create templates</button>
          {/* <button type="button" class="btn btn-outline-dark btn-lg px-4">Default</button> */}
        </div>
        {isOpen && (
        <ul>
          <li onClick={() => handleOptionClick('option1')}>Option 1</li>
          <li onClick={() => handleOptionClick('option2')}>Option 2</li>
          <li onClick={() => handleOptionClick('option3')}>Option 3</li>
        </ul>
      )}
      {selectedValue && <p>Selected value: {selectedValue}</p>}
      </div>
    </div>
  </div>
  
        </>
    )
}

export default Sidebar2;