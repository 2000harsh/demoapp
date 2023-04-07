import React from 'react';
import { useState } from 'react'
import axios from 'axios';
//import solc from 'solc';
//import fs from 'fs';

function Upload()
{
  function Fileread(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event)
    {
      // The file's text will be printed here
      console.log(event.target.result)
    };
    reader.readAsText(file);
  }

  const [apidata, setApidata] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
console.log("call")
    try {
      axios.get('http://192.168.29.69:3000/compile')
      .then((response) => {
        setApidata(response.data);
        console.log(response.data);
      }).catch((error)=>{
        console.log(error)
      })
    } catch (error) {
      console.log(error)
    }
  
  }
  
    return(
        <>
        {/* <form> */}
        <div className="prfile_img text-center p-4">
                <div className="flex flex-column justify-center align-items-center">
                   File: <input type="file" accept=".sol" onChange={Fileread}/><br/>
                   <button className='btn btn-danger' onClick={handleSubmit}>Submit</button>
                </div>

                <div className='data'>
                  {/* Output:  */}
                  {/* {apidata} */}
                </div>
            </div>
        {/* </form>      */}
        </>      
    )
}

export default Upload;