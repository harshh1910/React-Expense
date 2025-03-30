import React from 'react'
import styles from "./WalletAi.module.css"
import { Link } from 'react-router-dom'

function WalletAi() {
  return (


   
   
    <div className={styles["main-content"]}>
        <div className={styles["main"]}>
            <div className={styles["welcome-section"]}>
            <img className={styles["welcome-section-img"]} src="/AI.svg" alt=""/>
            </div>
            
            <div className={styles["H-tag"]}>
            <h1 className={styles["welcome-section-h1"]}>Welcome to Wallet AI</h1>
            <h4 className={styles["welcome-section-h4"]}>here to make you and your Expenses Smarter</h4>
            </div>

            <div className={styles["btn"]}>
            <Link to="/Home/WalletAi/ExpenseBreakDown"> 
             <button className={styles["btn-button"]} >Expense Breakdown</button> 
             </Link>
             <Link to="/Home/WalletAi/Investment"> 
                <button className={styles["btn-button"]} >Investments</button>
                </Link>
                <Link to="/Home/WalletAi/SmartSuggestion"> 
                <button className={styles["btn-button"]} >Smart Suggestions</button>
                </Link>
                <Link to="/Home/WalletAi/TripPlanning"> 
                <button className={styles["btn-button"]} >Trip Planning</button>
                </Link>
            </div>
 
      
            </div>

    </div>
  )
}

export default WalletAi