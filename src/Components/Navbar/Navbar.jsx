import React from 'react';
import './Navbar.css';
import logoImg from '../../Images/car-g27b46d981_1920.png';

const Navbar = () => {
    return (
        <nav>
            <img className = 'nav-logo' src= {logoImg} alt = 'logo'/>
            <h1 className = 'logo-title'>On the Go</h1>
        </nav>
    )
}

export default Navbar