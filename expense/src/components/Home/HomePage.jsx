import React from "react";
import styles from "./HomePage.module.css";
import ExpenseReport from "./ExpenseReport";
import Statement from "./Statement";
import Sidebar from "../Sidebar";

function HomePage() {
  return (
  
      <div className={styles["main-content"]}>
        <ExpenseReport />
        <Statement />
      </div>
  
  );
}

export default HomePage;
