import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";

const About = (props) => {
  return (
    <motion.div
      className={styles.about}
      id="about"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <div className={styles["content-box"]}>
        <h3 className={styles["title"]}>About Me</h3>
        <h2>it started with a dream and vision.</h2>
      </div>
      <div className={styles.box}>
        <p>
          A self-thought passionate Front-End Developer having an experience of
          building Web applications with JavaScript / Reactjs / Nodejs and some
          other cool libraries and frameworks and design patterners.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
