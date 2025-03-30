import React from 'react'
import styles from "./Landing.module.css"
import { Link } from 'react-router-dom'
function Landing() {
  return (
    <div className={styles['Landing-container']}>
    <nav className={styles["nav"]}>
        <div className={styles["logo"]}>
            <img src="logo.png" alt=""/>
        </div>
        <div className={styles["head"]}>
        <h2 className={styles['headH2']}>Expense Tracker</h2>
        
        <div className={styles["LS-btn"]}>
            <Link to="/SignIn">
            <button className={styles['button']} id="Login-btn">Login</button>     
            </Link>
            <Link to="/SignUp">
            <button className={styles['button']} id="signup-btn">Sign-up</button>                     
            </Link>
             
        </div>
    </div>
       
    </nav>
    <section  className={styles["content-1"]}>  
            <div className={styles["page-1"]}>
                <h2 className={styles['page-1H2']}>The Ultimate Financial Solution For Your Personal Expenses.</h2>
                <p className={styles['page-1P']}>Effortlessly track your spending, optimize your budget, and take control of your finances with our smart expense tracker.</p>
            </div>
            <div className={styles['image1']}>
                <img src="Front1.png" alt=""/>
            </div>
   
    </section>
</div>
  )
}

export default Landing