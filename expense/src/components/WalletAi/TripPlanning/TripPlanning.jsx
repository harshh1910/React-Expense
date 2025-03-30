import React from 'react'
import styles from "./TripPlanning.module.css"

function TripPlanning() {
  return (
<div className={styles["main-content"]}>
       


    <div className={styles["main"]}>
        
 
            <div className={styles["welcome-section"]}>
            <img className={styles["welcome-section-img"]} src="/AI.svg" alt=""/>

            <h1 className={styles["welcome-section-h1"]}>Trip Planning</h1>
            <h4 className={styles["welcome-section-h4"]}>Plan your Trip Using Wallet AI</h4>

            <div className={styles["prompt-inp"]}>
              
              <input className={styles["prompt-inp"]} type="text" name="" id="" placeholder="Enter your Destination" />
              <input className={styles["prompt-inp"]} type="number" name="" id="" placeholder="Enter your Budget" />
            </div>
        </div>
        </div>



    </div>

  )
}

export default TripPlanning