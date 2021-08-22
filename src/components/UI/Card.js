import { motion } from "framer-motion";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <motion.div
      className={styles["card"]}
      animate={{  boxShadow: "0px 0px 8px rgb(0, 0, 0)" }}
      transition={{duration: .14}}
      whileHover={{boxShadow: "none" }}
    >
      <span className={styles["logo"]}>{props.logo}</span>
      <h3 className={styles["title"]}>{props.title}</h3>
      <p>{props.content}</p>
      <button className={styles["arrow-btn"]}>
        <a href={props.href} target="_blank">
          <i class="fas fa-chevron-down"></i>
        </a>
      </button>
    </motion.div>
  );
};

export default Card;
