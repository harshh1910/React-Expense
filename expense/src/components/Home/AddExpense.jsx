import React, { useContext, useRef } from "react";
import styles from "./AddExpense.module.css";
import StatementContext from "../../StatementContext";
import { Navigate, useNavigate } from "react-router-dom";

function AddExpense() {

 const {addItems} = useContext(StatementContext)
  const navigate = useNavigate()
  const label = useRef()
  const amount = useRef()

  const btnClick=()=>{
    addItems(label.current.value, amount.current.value)

    navigate("/Home")
    label.current.value=""
    amount.current.value=""
  }

  return (
    <div className={styles["AddExpense-Container"]}>
      <div className={styles["Add-expense"]}>
        <h2 className={styles["Add-expense-h2"]}>Add Expense</h2>
        <h5 className={styles["Add-expense-h5"]}>Categories</h5>

        <div className={styles["icons"]}>
          <div className={styles["stay"]}>
            <img src="/Vector.png" alt="" />
          </div>
          <div className={styles["travel"]}>
            <img src="/travel.png" alt="" />
          </div>
          <div className={styles["food"]}>
            {" "}
            <img src="/food.png" alt="" />
          </div>
          <div className={styles["others"]}>
            <img src="/WIFI.svg" alt="" />
          </div>
        </div>

        <div className={styles["inp"]}>
          <input
            className={styles["inp1-input"]}
            type="text"
            placeholder="Expense Label"
            ref={label}
          />

          <input
            className={styles["inp2-input"]}
            type="text"
            placeholder="Expense Amount"
            ref={amount}
          />
        </div>


        <div className={styles["btn"]}>
            <button className={styles["btn1"]}>Cancel</button>
            <button className={styles["btn2"]} onClick={btnClick}>Add</button>
        </div>

      </div>
     
    </div>
  );
}

export default AddExpense;
