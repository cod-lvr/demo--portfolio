import React from 'react';
import logo from '../media/logo.png';

const Navbar = props => {
    return (
        <nav>
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="links">
                <a href="" >Home</a>
                <a href="" >About</a>
                <a href="" >Projects</a>
                <a href="" >Contact</a>
            </div>
        </nav>
    )
};

export default Navbar;