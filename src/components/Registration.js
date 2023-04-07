import './Form.css';
import { useState } from "react"
import React from 'react';
import { useNavigate,Link, Route,Routes } from 'react-router-dom';
import Form from './Form';
import fireDb from "../Firebas"
import { ToastContainer, toast } from "react-toastify";

const initialState = {
  namee:"",
  password:""
}
function Registration()
{

  const [state,setState]=useState(initialState);

  const {namee,password}=state;

  const handleInput =(e) =>{
    const {name, value} = e.target;
    
    setState({...state, [name]: value})
};

const handleSubmit =(e)=>{
  e.preventDefault(); //to stop reload page.
  fireDb.child("contaxt").push(state, (err => { //change context in database
      if(err){
          toast.error(err);
      }else{
          toast.success("Form added");
      }
  }))
};

    return(            
            <>

            <Routes>
                <Route exact path='/Form' element={<Form/>}></Route>
            </Routes>
            <center>
            <div className="wrapper">
                <h1>Login</h1>
            <form onSubmit={handleInput}>
      <div class="input-box">
        <input type="text" name="namee" value={namee} onChange={handleInput} placeholder="Enter your name" required/>
      </div>     
      <div class="input-box">
        <input type="password" name="password" value={password} onChange={handleInput} placeholder="Confirm password" required/>
      </div>
      
      <div class="input-box button">
        <input type="Submit" value="Login"/>
      </div>
      <div class="text">
        <h3>Don't have any account? <Link to='/Form'>Register</Link></h3> 
      </div>
    </form>
    </div>
    </center>
            
            </>
    )
}

export default Registration;