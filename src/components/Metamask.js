function Metamask()
{
    return(
        <>
            <h1>Connect to wallet</h1>
            <button onClick={async () => {
                alert("Connect to metamask!!");
                if(window.ethereum)
                {
                    // console.log(await window.ethereum.enable());
                    const accAddress = await window.ethereum.enable()
                    console.log(accAddress);
                }
            }}>Metamask</button>
        </>
    )
}

export default Metamask