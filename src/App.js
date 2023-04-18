import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Form from './components/Form';
import Sidebar2 from './components/Sidebar2';
import History from './components/History';
import Registration from './components/Registration';
import Landingpage from './components/Landingpage';
import Home from './components/Home';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'


function App() {


  // constproviderUrl = process.env.PROVIDER_URL;

  // useEffect(()=>{
  //   const web3 = new Web3(providerUrl);
  // }, []);

  return (
    <div className="App">  
  <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
    </Routes>
 
      
    </div>
  );
}

export default App;
