import react from 'react';
import Navbar from './Navbar';
import Landingpage from './Landingpage';
import Footer from './Footer';

function Home()
{
    return(
        <div>
            {/* <Navbar/> */}
            
            <Landingpage/>
            <Footer/>
        </div>
    )
}

export default Home;