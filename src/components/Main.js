import React from 'react';
import styles from './Main.module.css';
import Button from './UI/Button';

const Main = props => {
    return (
        <main className={styles.main} id="home" >
             <div className={styles.photog}>
                <h4>photoDisplay</h4>
            </div>
            <div className={styles.contentbox}>
                <h1>Hello, I'M <span>Ayman Gamal</span></h1>
                <h3>web developer & web designer</h3>
                <Button><a href="#about">read more</a></Button>
                <button className={styles["btn-sec"]}><a href="1"></a>SEE MY RESUME</button>
            </div>
        </main>
    )
}

export default Main;