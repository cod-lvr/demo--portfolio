import React from 'react';
import styles from './Main.module.css';
import Button from './UI/Button';

const Main = props => {
    return (
        <main className={styles.main}>
            <div className={styles.contentbox}>
                <h4>Hello there</h4>
                <h2>I am ayman gamal</h2>
                <p> Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <Button>read more</Button>
            </div>
            <div className={styles.photog}>
                <h4>photoDisplay</h4>
            </div>
        </main>
    )
}

export default Main;