import React from 'react';
import styles from './About.module.css';

const About = props => {
    return (
        <div className={styles.about} id="about" >
            <div className={styles["content-box"]}>
                <h3>About Me</h3>
                <p>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
                </p>
            </div>
            <div className={styles.box}>
                <div className={styles.line}></div>
                <p>It has survived not only five centuries It has survived not only  five centuries.</p>
            </div>
        </div>
    )
};

export default About;