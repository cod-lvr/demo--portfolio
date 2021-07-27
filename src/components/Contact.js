import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMssg, setEnteredMssg] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const nameInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputHandler = (event) => {
    setEnteredMssg(event.target.value);
  };

  const mssgInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    // validation
    if (enteredName.trim() === "" || !enteredEmail.includes("@")) {
      return;
    }

    const id = Math.floor(Math.random() * 6);
    const data = {
      data: {
        id: id,
        name: enteredName,
        email: enteredEmail,
        messg: enteredMssg,
      },
    };

    const sendRequest = async () => {
      try {
        const sendding = await fetch(
          "https://portfolio-f3187-default-rtdb.firebaseio.com/form.json",
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        if (!sendding.ok) {
          return new Error("no data to send!");
        }
        const response = await sendding.json();
        setFormSubmitted(true);
      } catch (err) {
        console.log(err.message);
      }
      sendRequest();
    };
    setFormSubmitted(false);
    setEnteredName("");
    setEnteredEmail("");
    setEnteredMssg("");
  };
  return (
    <React.Fragment>
      <div className={styles["contact"]} id="contact">
        <h3 className ={styles["title"]}>Reach Out to me</h3>
        <div className={styles["contactbox"]}>
          <p>
            DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
          </p>
          <div className={styles["links"]}>
            <a href="https://twitter.com/aym_a_n_g" target="_blank">
              <span className={styles.link}>
                <i class="fab fa-twitter"></i>
              </span>
            </a>
            <a href="https://github.com/cod-lvr" target="_blank">
              <span className={styles.link}>
                <i class="fab fa-github"></i>
              </span>
            </a>
            <a
              href="mailto: ayman-gamal61@hotmail.com?Subject=subject message"
              target="_blank"
            >
              <span className={styles.link}>
                <i class="fas fa-envelope"></i>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/ayman-gamal-41b1b61b5/"
              target="_blank"
            >
              <span className={styles.link}>
                <i class="fab fa-linkedin-in"></i>
              </span>
            </a>
          </div>
        </div>
        <form className={styles["form"]} onSubmit={submitHandler}>
          <input
            placeholder="Enter your name"
            type="text"
            onChange={nameInputHandler}
            value={enteredName}
          />
          <input
            placeholder="Enter valid E-mail"
            type="email"
            onChange={emailInputHandler}
            value={enteredEmail}
          />
          <textarea
            placeholder="Message"
            rows="4"
            cols="50"
            onChange={mssgInputHandler}
            value={enteredMssg}
          />
          {formSubmitted && <p>Form submitted</p>}
          <button type="submit" className={styles.btn}>Send</button>
        </form>
      </div>
      <footer className={styles.footer}>
        <p>&copy; all rights reserved 2021</p>
        <p>cod-Lvr</p>
      </footer>
    </React.Fragment>
  );
};

export default Contact;