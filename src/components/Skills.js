import React from 'react';
import Button from './UI/Button';
import styles from './Skills.module.css';

const Skills = props => {
    return (
        <div className={styles.skills}>
            <h3>skills</h3>
            <div className={styles.icons}>
                <span className={styles.icon}><i className="fab fa-react fa-5x"></i></span>
                <span className={styles.icon}><i className="fab fa-js-square fa-5x"></i></span>
                <span className={styles.icon}><i className="fab fa-html5 fa-5x"></i></span>
                <span className={styles.icon}><i className="fab fa-css3-alt fa-5x"></i></span>
                <span className={styles.icon}><i className="fab fa-github-square fa-5x"></i></span>
                <span className={styles.icon}><i class="fab fa-node fa-5x"></i></span>
            </div>
            <div className={styles.content}>
                <p>it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                <Button>Download Cv</Button>
            </div>
        </div>
    )
};

export default Skills;