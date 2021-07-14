import styles from './Button.module.css';
import React from 'react';

const Button = props => {
    return <button className={styles.button} id={props.id}>{props.children}</button>
};

export default Button;