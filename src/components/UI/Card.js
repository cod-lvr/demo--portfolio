import styles from './Card.module.css';

const Card = props => {
    return (
        <div className={styles["card"]}>
            <span className={styles["logo"]}>{props.logo}</span>
                <h3 className={styles["title"]}>{props.title}</h3>
                <p>{props.content}</p>
                <button className={styles["arrow-btn"]}><a href={props.href} target="_blank"><i class="fas fa-chevron-down"></i></a></button>
        </div>
    )
};

export default Card;