import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import fireDb from "../Firebas"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './History.css'

const initialState = {
    token_name:'',
    token_symbol:'',
    decimal:'',
    supply_type:''
}

function History(){

    const [data,setData]=useState({});

    useEffect(()=>{
        fireDb.child("contaxt").on("value", (snapshot) =>{
            if(snapshot.val()!==null){
                setData({...snapshot.val()})
            } else {
                setData({});
            }
        });
        return() => {
            setData({});
        };
    },[]);
    return(
        <div>
            <center>
            <ButtonGroup size="lg" className="mb-2">
                    <Link to="/Cardform"><Button className="b1">Form </Button></Link>
                    <Link to="/History"><Button className="b2">History</Button></Link>
            </ButtonGroup>
        </center>
            <table className="style-table">
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>No.</th>
                        <th style={{textAlign:"center"}}>Token Name</th>
                        <th style={{textAlign:"center"}}>Token Symbol</th>
                        <th style={{textAlign:"center"}}>Decimal</th>
                        <th style={{textAlign:"center"}}>Supply Type</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((id,index) => {
                        return (
                            <tr key={id}>
                                <th style={{color:"white",backgroundColor:"black"}} scope="row">{index+1}</th>
                                <td style={{color:"white",backgroundColor:"black"}}>{data[id].token_name}</td>
                                <td style={{color:"white",backgroundColor:"black"}}>{data[id].token_symbol}</td>
                                <td style={{color:"white",backgroundColor:"black"}}>{data[id].decimal}</td>
                                <td style={{color:"white",backgroundColor:"black"}}>{data[id].supply_type}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default History;