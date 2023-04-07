import React from 'react';
import './Form.css';
import { useState } from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Registration from './Registration';

const initialState = {
  name:"",
  email:"",
  
}

function Form()
{
       return(        
            <>
            <center>
            <div className="wrapper">
                <h1>Registration</h1>
            <form action="#">
      <div class="input-box">
        <input type="text" placeholder="Enter your name" required/>
      </div>
      <div class="input-box">
        <input type="text" placeholder="Enter your email" required/>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Enter Phone Number" required/>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Enter Password" required/>
      </div>
      <div class="policy">
        <input type="checkbox"/>
        <h3>I accept all terms & condition</h3>
      </div>
      <div class="input-box button">
        <input type="Submit" value="Register"/>
      </div>
      <div class="text">
        <h3>Already have an account? <Link to='/Registration'><a href="#">Login now</a></Link></h3>


        <Routes>
                <Route exact path='/Registration' element={<Registration/>}></Route>
        </Routes>
      </div>
    </form>
    </div>
    </center>
            </>
    )
}

export default Form;