import React, { useContext } from 'react'
import styles from "./ExpenseReport.module.css"
import StatementContext from '../../StatementContext'

function ExpenseReport() {
  const {Totalexpense,Monthlytotal} = useContext(StatementContext)
    
    
  return (
   <div className={styles['main']}>
          <h2 className={styles['main-h2']}>Expense Report</h2>
          <h6 className={styles['main-h6']}>Sept 1 - Sept 30,2024</h6>
  
      <div className={styles['expense-report']}>
        
          <div className={`total-credit ${styles.card}`}> 
              <img src="Bpx1.svg" alt=""/>
              <p className={styles['card-p']}>₹30000</p>
              <span className={styles['card-span']}>Total Credit</span>
              <small className={styles['total-credit-small']}>+3% from last month</small>
          </div>
          <div className={`${styles.card} total-expense`}> 
              <img src="box2.svg" alt=""/>
              <p className={styles['card-p']}>₹{Monthlytotal}</p>
              <span className={styles['card-span']}>Total Expense</span>
              <small className={styles['total-expense-small']}>+8% from last month</small>
          </div>
          <div className={`${styles.card} todays-credit`}>
              <img src="box3.svg" alt=""/>
              <p className={styles['card-p']}>₹980</p>
              <span className={styles['card-span']}>Today's Credit</span>
              <small className={styles['todays-credit-small']}>-2% from yesterday</small>
          </div>
          <div className={`${styles.card} todays-expense`}>
              <img src="TodaysExp.svg" alt=""/>
              <p className={styles['card-p']}>₹{Totalexpense}</p>
              <span className={styles['card-span']}>Today's Expense</span>
              <small className={styles['todays-expense-small']}>+10% from yesterday</small>
          </div>
      </div>
  </div>
  )
}

export default ExpenseReport