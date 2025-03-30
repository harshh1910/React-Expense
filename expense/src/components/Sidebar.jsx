import React, { useContext } from 'react'
import styles from "./Sidebar.module.css"
import { Link } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import { app } from '../../firebase'
import StatementContext from '../StatementContext'

function Sidebar() {


  return (
    <div className={styles['sidebar-container']}>
      <div className={styles['sidebar-icon']}>

      <img className={styles['sidebar-icon-img']}src="/wallet-icon.png" alt=""/>

      </div>
      
     
        <ul className={styles['sidebar-options-ul']}>
        <Link to="/Home" style={{textDecoration:"none"}}>
          <li className={`${styles['sidebar-li']}`}>
            <img className={styles['sidebar-img']} src="/dashboard1.svg" alt=""/>Dashboard</li>
            </Link>
            <Link to="/Home/WalletAi" style={{textDecoration:"none"}}>
          <li className={styles['sidebar-li']}>
            <img className={styles['sidebar-img']} src="/walletai.svg" alt=""/>Wallet Ai</li></Link>
        
    <Link to="/Home/Charts" style={{textDecoration:"none"}}>
          <li className={styles['sidebar-li']}>
            <img className={styles['sidebar-img']} src="/charts.svg" alt=""/>Charts</li>
    </Link>

          <li className={styles['sidebar-li']}>
            <img  className={styles['sidebar-img']}src="/setting.svg" alt=""/>Setting</li>
    
          <li className={styles['sidebar-li']} >
            <img className={styles['sidebar-img']} src="/signOut.svg" alt=""/>SignOut</li>
        </ul> 
      </div>
 
  )
}

export default Sidebar