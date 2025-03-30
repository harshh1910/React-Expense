import React from "react";
import styles from "./SmartSuggestion.module.css"

function SmartSuggestion() {
  return (
    <div className={styles["main-content"]}>
 
        <div className={styles["main"]}>
          <div className={styles["welcome-section"]}>
            <img className={styles["welcome-section-img"]} src="/AI.svg" alt="" />

            <h1 className={styles["welcome-section-h1"]}>Smart Suggestions</h1>
            <h4 className={styles["welcome-section-h1"]}>Analyze your Earnings and Spending Smartly..</h4>

            <div className={styles["prompt-inp"]}>
              <input className={styles["prompt-inp-input"]}                type="text"
                name=""
                id="prp"
                placeholder="What are you Planning to buy"
              />
              <input
              className={styles["prompt-inp-input"]}   
                type="number"
                name=""
                id=""
                placeholder="Enter your Budget"
              />
            </div>
          </div>
        </div>
      </div>

  );
}

export default SmartSuggestion;
