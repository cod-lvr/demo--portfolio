import React from "react";
import styles from "./Projects.module.css";
import v1 from "../media/mac.png";
import Card from "./UI/Card";

const Projects = (props) => {
  return (
    <div className={styles.projects} id="projects">
      <h4 className={styles.title}>Some Projects</h4>
      <div className={styles.boxs}>
        <Card 
        logo={<i class="fab fa-react"></i>}
        title="versaye store"
        content="online store cloned from Verache" 
        href="https://www.google.com/"/>
        <div className={styles.boxOne}>
          <img src={v1} alt="photo" />
        </div>
        <Card
        logo={<i class="fab fa-react"></i>}
        title="versaye store"
        content="online store cloned from Verache" />
        <Card 
        logo={<i class="fab fa-react"></i>}
        title="versaye store"
        content="online store cloned from Verache" />
        <Card logo={<i class="fab fa-react"></i>}
        title="versaye store"
        content="online store cloned from Verache"/>
        <Card logo={<i class="fab fa-react"></i>}
        title="versaye store"
        content="online store cloned from Verache"/>
      </div>
      <div className={styles.shape}></div>
    </div>
  );
};

export default Projects;
