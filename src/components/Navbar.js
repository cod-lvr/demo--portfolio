import React from 'react';
import logo from '../media/logo.png';
import styles from './Navbar.module.css';

const Navbar = props => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} />
            </div>
            <div className={styles.links}>
                <a href="" >Home</a>
                <a href="" >About</a>
                <a href="" >Projects</a>
                <a href="" >Contact</a>
            </div>
        </nav>
    )
};

export default Navbar;