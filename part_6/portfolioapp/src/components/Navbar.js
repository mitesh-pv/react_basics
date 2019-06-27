// using higher order component using react route

import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom';


const Navbar =(props)=>{
    
    setTimeout(()=>{
        props.history.push('/About')
    }, 2000)
    
    return(
        <nav className="nav-wrapper navbar-fixed light-blue accent-3">
            <div className="container">
                <a  href="./Home" className="brand-logo">JOHN WICK</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar); // wrapping the component