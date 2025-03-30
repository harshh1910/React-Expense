
     import React, { useContext } from 'react'
     import styles from './Statement.module.css'
import { Link } from 'react-router-dom'
import StatementContext from '../../StatementContext';

     function Statement() {

           const {list}= useContext(StatementContext);
        //    console.log(list);

          

       return (
        <div className={styles.statement}>
        <h3 className={styles['statement-h3']}>Statement</h3>
        <Link to="/Home/AddTransaction">
        <button className={styles['add-expense-btn']}>+ Add Expense</button>
        </Link>
     
        <table className={styles['table']}>
            <thead className={styles['thead']}>
                <tr>
                    <th className={styles.th}>#</th>
                    <th className={styles.th}>Name</th>
                    <th className={styles.th}>Date & Time</th>
                    <th className={styles.th}>Category</th>
                    <th className={styles.th}>Amount</th>
                </tr>
            </thead>
            <tbody>
        
                {list.map((item)=>
                   <tr className={styles.tr}>
                    <td className={styles.td}>{item.serialNo}</td>
                    <td className={styles.td}>{item.name}</td>
                    <td className={styles.td}>{item.datee}</td>
                    <td className={styles.td}><span className={`${styles.icon} ${styles['house-icon']}`}><img src="Vector.png" alt=""/></span></td>
                    <td className={styles.td}>Rs.{item.amount}</td>
                </tr>
                )}





            </tbody>
        </table>
    </div> 
       )
       }
       
       export default Statement
    //    <tr className={styles.tr}>
    //        <td className={styles.td}>01</td>
    //        <td className={styles.td}>House Rent</td>
    //        <td className={styles.td}>10/09/2024, 18:00</td>
    //        <td className={styles.td}><span className={`${styles.icon} ${styles['house-icon']}`}><img src="Vector.png" alt=""/></span></td>
    //        <td className={styles.td}>Rs.10000/-</td>
    //    </tr>
    //    <tr className={styles.tr}>
    //        <td className={styles.td}>02</td>
    //        <td className={styles.td}>Office Cab</td>
    //        <td className={styles.td}>10/09/2024, 11:00</td>
    //        <td className={styles.td}><span className={`${styles.icon} ${styles['cab-icon']}`}><img src="travel.png" alt=""/></span></td>
    //        <td className={styles.td}>Rs.3000/-</td>

    //    </tr>
    //    <tr className={styles.tr}>
    //        <td className={styles.td}>03</td>
    //        <td className={styles.td}>Breakfast</td>
    //        <td className={styles.td}>10/09/2024, 09:00</td>
    //        <td className={styles.td}><span className={`${styles.icon} ${styles['breakfast-icon']}`}>
    //            <img src="food.png" alt=""/>
    //        </span></td>
    //        <td className={styles.td}>Rs.5000/-</td>

    //    </tr> */}
    //    {/* <tr className={styles.tr}   >
    //        <td className={styles.td}>04</td>
    //        <td className={styles.td}>Others</td>
    //        <td className={styles.td}>09/09/2024, 20:00</td>
    //        <td className={styles.td}><span className={`${styles.icon} ${styles['wifi-icon']}`}><img src="WIFI.svg" alt=""/></span></td>
    //        <td className={styles.td}>Rs.2000/-</td>

    //    </tr>