import React from 'react'
import './Navbar.css';
import './About';
import {Link, Route, Routes } from 'react-router-dom';
import { useState } from "react"
import About from './About';
import ProfilePage from './ProfilePage';
import Registration from './Registration';
import Form from './Form';
import Cardform from './Cardform';
import History from './History';
import Upload from './Upload';
import logo2  from "./logo2.png";
import Metawallet from "./Metawallet";
import { useSelector } from 'react-redux';
function Navbar() {

  const user = {
    name: 'Harsh Bhatti',
    email: 'harsh@example.com',
    location: 'Baroda, Guj',
    profilePicture: 'https://via.placeholder.com/150',
  };
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


async function getAccount(){
  const accounts = await window.ethereum.request({
      method:'eth_requestAccounts',
  });
  const account = accounts[0];
  return account;
}

const [address, SetAddress] = useState('');
 
const ConnectButton = () => {
  if(typeof window !== "undefined")
  {
      getAccount().then((response) => 
      {
          SetAddress(response);
      });
  }
};

const ChangeBtn =() =>{
  if(address !== '')
  {
    
  }
}

const amount =  useSelector(state => state.amount)

  return (
    <>

<div class="container" style={{position:'relative'}}>
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"></svg>
        <img src={logo2} className="logo" />
      </a>

      <ul class="nav nav-pills">
        <li className="nav-item1"><button className='btn btn-primary' disabled={true}>Your balance:{amount}</button></li>
        <li className="nav-item1"><Link className='linkcls' to="/Cardform"><a className="nav-link">App</a></Link></li>
        {/* <li class="nav-item1"><Link className='linkcls' to="/About"><a class="nav-link">About</a></Link></li> */}
        <li class="nav-item1" ><Link className='linkcls' to="/ProfilePage"><a class="nav-link">ProfilePage</a></Link></li>
        <li class="nav-item1" ><Link className='linkcls' to="/Registration"><a class="nav-link">Login</a></Link></li>
        <li class="nav-item1" ><Link className='linkcls' to="/Upload"><a class="nav-link">Upload Contract</a></Link></li>
        <li class="nav-item2" ><Link className='linkcls' to="">{address == '' && <button onClick={ConnectButton} className='btn btn-dark btn-lg'>Connect Wallet</button>}</Link></li>
        <li class="nav-item2" ><Link className='linkcls' to="">{address !=='' && <button onClick={ChangeBtn} className='btn btn-dark btn-lg'>Disconnect Wallet</button>}</Link></li>
      </ul>
      
      <p className='walletBtnAdd'>{address}</p>
    </header>
  </div>

  <Routes>
      <Route path="/Cardform" element={<Cardform/>}></Route>
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