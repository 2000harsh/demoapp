import React from 'react';
import smartcontract from './Contract.sol';
import solc from 'solc';
// import fs from 'fs';

// function compileSolidityFile(smartcontract) 
// {
//   // Read the Solidity file contents
//     const input = fs.readFileSync(smartcontract, 'utf8');

//   // Compile the Solidity code using solc
//     const output = solc.compile(input, 1);

//   // Check for any errors during compilation
//     if (output.errors)
//     {
//       throw new Error(`Compilation error: ${output.errors[0]}`);
//     }

//   // Extract the compiled contract code
//     const Contract = Object.keys(output.contracts)[0];
//     const contractBytecode = output.contracts[`${Contract}`].bytecode;

//     return contractBytecode;
// }

function Fileread(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function(event) {
    // The file's text will be printed here
    console.log(event.target.result)
  };

  reader.readAsText(file);
}

function Upload()
{
  
    return(
        <>
        <form>
        <div className="prfile_img text-center p-4">
                <div className="flex flex-column justify-center align-items-center">
                   File: <input type="file" accept=".sol" onChange={Fileread}/><br/>
                   <button className='btn btn-danger' type='submit' value='submit'>Submit</button>
                </div>
            </div>
        </form>
             
        </>      
    )
}

export default Upload;