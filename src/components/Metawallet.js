import { useState } from "react";

function Metawallet()
{

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




    return(
        <>
            <h1>Connect Wallet</h1>
            <button onClick={ConnectButton}>Connect</button><br/>
            <p style={{textAlign:'center', color:'white'}}>{address}</p> 
        </>
    )
}

export default Metawallet