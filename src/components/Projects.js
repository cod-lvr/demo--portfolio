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
        href="https://mystifying-villani-fd6ed3.netlify.app/"/>
        <div className={styles.boxOne}>
          <img src={v1} alt="photo" />
        </div>
        <Card
        logo={<i class="fab fa-react"></i>}
        title="wildLife website"
        content="website template for wildLife design" 
        href="https://priceless-edison-080f50.netlify.app/"/>
        <Card 
        logo={<i class="fab fa-react"></i>}
        title="photographer website"
        content="website template for photographer design" 
        href="https://jovial-mclean-1b2727.netlify.app/"/>
        <Card logo={<i class="fab fa-react"></i>}
        title="food app"
        content="online store cloned from Verache"
        href=""/>
        <Card logo={<i class="fab fa-react"></i>}
        title="versaye store"
        content="online store cloned from Verache"
        href="" />
      </div>
    </div>
  );
};

export default Projects;
