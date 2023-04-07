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
import Metamask from './components/Metamask';
import Metawallet from './components/Metawallet';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'


function App() {


  // constproviderUrl = process.env.PROVIDER_URL;

  // useEffect(()=>{
  //   const web3 = new Web3(providerUrl);
  // }, []);

  return (
    <div className="App">  

    {/* <Routes>
      <Route>
        <Route exact path="/Read" element={<Form/>} />
        <Route exact path="/Read" element={<Registration/>} />
      </Route>
    </Routes>
  */}
      <Navbar/>
      {/* <Metamask/> */}
      {/* <Metawallet/> */}
      <Landingpage/>
      {/* <Sidebar/>
      <Sidebar2/> */}
      {/* <History/> */}
      <Footer/> 

    </div>
  );
}

export default App;
