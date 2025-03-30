import React from "react";
import styles from "./Investment.module.css";

function Investment() {
  return (
    <div className={styles["main-content"]}>
      <div className={styles["main"]}>
        <div className={styles["welcome-section"]}>
          <img  className={styles["welcome-section-img"]} src="/AI.svg" alt="" />

          <h1 className={styles["welcome-section-h1"]}>Investments</h1>
          <h4 className={styles["welcome-section-h1"]}>Get Expert Investment Suggestion in a Seconds</h4>

          <div className={styles["prompt-inp"]}>
            <input className={styles["prompt-inp-input"]}
              type="number"
              name=""
              id="numberInput"
              placeholder="Enter the Amount you want to Invest"
            />
            <button className={styles["send-button"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                fill="white"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investment;
