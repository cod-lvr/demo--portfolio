import React from 'react';
import styles from './Projects.module.css';
import v1 from '../media/V1.png';

const Projects = props => {
    return (
        <div className={styles.projects} id="projects">
            <h4 className={styles.title}>privious projects</h4>
            <div className={styles.boxs}>
                <div className={styles.box}>
                    <img src={v1} alt="photo" />
                </div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
            </div>
            <div className={styles.shape}></div>
        </div>
    )
};

export default Projects;