import React from 'react'
import styles from './Expensebreak.module.css'

function ExpenseBreakDown() {
  return (
    <div className={styles["main-content"]}>

      
   
      
      <div className={styles["main"]}>
        <div className={styles["welcome-section"]}>
          <div>
            <img className={styles["welcome-section-img"]} src="/AI.svg" alt="" />

            <h1 className={styles["welcome-section-h1"]}>Expense BreakDown</h1>
            <h4 className={styles["welcome-section-h4"]}>Analyze your Earnings and Spending Smartly..</h4>
          </div>

          <p className={styles["promptResponse"]}></p>

          <div className={styles["prompt-inp"]}>
            <p className={styles["promptStyle"]}>
              Provide me the Expense BreakDown according to my credit Limit
            </p>
            <p className={styles["promptStyle"]} >
              Provide me an Expense BreakDown, If I want to save ______ rupees
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ExpenseBreakDown
















