import React from "react";
import { motion } from "framer-motion";

import Button from "./UI/Button";
import styles from "./Skills.module.css";

const Skills = (props) => {
  return (
    <motion.div
      className={styles.skills}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{duration: 2, delay: 3}}
    >
      <h3 className={styles.title}>skills</h3>
      <div className={styles.icons}>
        <span className={styles.icon} style={{ color: "#61DBFB" }}>
          <i className="fab fa-react fa-5x"></i>
          <span className={styles.tooltiptext}>React.js</span>
        </span>
        <span className={styles.icon} style={{ color: "#f0db4f" }}>
          <i className="fab fa-js-square fa-5x"></i>
        </span>
        <span className={styles.icon} style={{ color: "#f06529" }}>
          <i className="fab fa-html5 fa-5x"></i>
          <span className={styles.tooltiptext}>html5</span>
        </span>
        <span className={styles.icon} style={{ color: "#2965f1" }}>
          <i className="fab fa-css3-alt fa-5x"></i>
          <span className={styles.tooltiptext}>CSS</span>
        </span>
        <span className={styles.icon} style={{ color: "#211F1F" }}>
          <i className="fab fa-github-square fa-5x"></i>
          <span className={styles.tooltiptext}>Github</span>
        </span>
        <span className={styles.icon} style={{ color: "#68A063" }}>
          <i class="fab fa-node fa-5x"></i>
          <span className={styles.tooltiptext}>node.js</span>
        </span>
      </div>
      <div className={styles.content}>
        <p>
          So far I have JavaScript, HTML, CSS,jQuery, Bootstrap,
          React.Js,Tailwind and Git/GitHub under my belt. I've started learning
          Node.JS,MongoDB, and Express.JS. I'm still enthusiastically grabbing
          onto any other programming languages,frameworks,or principles I can
          integrate into the coding web in my head
        </p>
        <Button>
          <a href="#contact">cONTACT ME</a>
        </Button>
      </div>
    </motion.div>
  );
};

export default Skills;
