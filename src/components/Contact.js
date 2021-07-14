import React from "react";
import Button from "./UI/Button";
import styles from "./Contact.module.css";

const Contact = (props) => {
  return (
    <React.Fragment>
      <div className={styles["contact"]} id="contact">
        <h3>contact</h3>
        <div className={styles["contactbox"]}>
          <p>
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting
          </p>
        </div>
        <div className={styles["form"]}>
          <input placeholder="FIRST NAME" type="text" />
          <input placeholder="E-mail" type="email" />
          <Button>Send</Button>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>&copy; all rights reserved 2021</p>
        <p>cod-Lvr</p>
      </footer>
    </React.Fragment>
  );
};

export default Contact;
