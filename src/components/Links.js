import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'

function Links()
{
    return (
        <div>
        
            <Link to="/Navbar">Navbar</Link>
            <Link to="/Sidebar">Sidebar</Link>
            <Link to="/Sidebar2">Sidebar2</Link>
            <Link to="/Features">Features</Link>
            <Link to="/Footer">Footer</Link>
        
        </div>
    )
}

export default Links;