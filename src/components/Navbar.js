import React from 'react';
import styles from './Navbar.module.css';
import logo from '../media/logo.png';
import Main from './Main';

const Navbar = props => {
    return (
        <div>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                {/* <img src={logo} /> */}
                <h3>Logo</h3>
            </div>
            <div className={styles.links}>
                <a href="" >Home</a>
                <a href="" >About</a>
                <a href="" >Projects</a>
                <a href="" >Contact</a>
            </div>
        </nav>
        <Main />
        </div>
    )
};

export default Navbar;