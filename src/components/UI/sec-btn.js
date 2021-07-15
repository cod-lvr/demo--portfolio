import styles from './Button.module.css';
import React from 'react';

const SecBtn = props => {
    return <button className={styles.sec} id={props.id}>{props.children}</button>
};

export default SecBtn;