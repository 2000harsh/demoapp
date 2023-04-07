import React from 'react'
import './Navbar.css';
import './About';
import {Link, Route, Routes } from 'react-router-dom';
import About from './About';
import ProfilePage from './ProfilePage';
import Registration from './Registration';
import Form from './Form';
import CardView from './CardView'
import History from './History';
import Upload from './Upload';
import logo2  from "./logo2.png";

function Navbar() {

  const user = {
    name: 'Harsh Bhatti',
    email: 'harsh@example.com',
    location: 'Baroda, Guj',
    profilePicture: 'https://via.placeholder.com/150',
  };

  return (
    <>


<div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"></svg>
        <img src={logo2} className="logo" />
      </a>

      <ul class="nav nav-pills">
        <li className="nav-item1"><Link to="/CardView"><a className="nav-link">Connect Wallet</a></Link></li>
        <li class="nav-item1"><Link to="/About"><a class="nav-link">About</a></Link></li>
        <li class="nav-item1" ><Link to="/ProfilePage"><a class="nav-link">ProfilePage</a></Link></li>
        <li class="nav-item1" ><Link to="/Registration"><a class="nav-link">Login</a></Link></li>
        <li class="nav-item1" ><Link to="/Upload"><a class="nav-link">Upload Contract</a></Link></li>
      </ul>
    </header>
  </div>

  <Routes>
      <Route path="/CardView" element={<CardView/>}></Route>
      <Route path="/History" element={<History/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/ProfilePage" element={<ProfilePage user={user}/>}></Route>
      <Route path="/Form" element={<Form/>}></Route>
      <Route path="/Registration" element={<Registration/>}></Route>
      <Route path="/Upload" element={<Upload/>}></Route>
      
  </Routes>
  


    </>
    
  )
}

export default Navbar;