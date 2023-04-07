import React from 'react'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import './Sidebar.css';
import Upload from './Upload';

function Sidebar()
{
    return(
        <>
            <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="./img/bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Do you have a unique contract idea that you think people would love to use?</h1>
        <p class="lead">We can help you get it out there!</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-success btn-lg px-4 me-md-2"><Link to="/Upload">Upload Contract</Link></button>
        </div>
      </div>
    </div>
  </div>

  <Routes>
      <Route path="/Upload" element={<Upload/>}></Route>
  </Routes>
    
        </>
    )
}

export default Sidebar;