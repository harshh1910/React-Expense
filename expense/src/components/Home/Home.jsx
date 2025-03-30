import React, { useState } from "react";
import { data, Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import StatementContext from "../../StatementContext";

function Home() {
  const [list, setNewList] = useState([
   
    {
      amount: 200,
      dateFormatted: "1/15/2025",
      datee: "1/15/2025, 10:30:00 AM",
      id: 1,
      name: "Rent",
      serialNo: 1,
      timeFormatted: "10:30:00 AM",
    },
    {
      amount: 150,
      dateFormatted: "2/11/2025",
      datee: "2/11/2025, 1:47:50 AM",
      id: 2,
      name: "Transport",
      serialNo: 2,
      timeFormatted: "1:47:50 AM",
    },
    {
      amount: 231,
      dateFormatted: "3/11/2025",
      datee: "3/11/2025, 1:47:50 AM",
      id: 3,
      name: "Food",
      serialNo: 3,
      timeFormatted: "1:47:50 AM",
    },
    {
      amount: 310,
      dateFormatted: "4/20/2025",
      datee: "4/20/2025, 6:20:30 PM",
      id: 4,
      name: "Shopping",
      serialNo: 4,
      timeFormatted: "6:20:30 PM",
    },
    {
      amount: 180,
      dateFormatted: "5/05/2025",
      datee: "5/05/2025, 9:00:00 AM",
      id: 5,
      name: "Utilities",
      serialNo: 5,
      timeFormatted: "9:00:00 AM",
    },
    {
      amount: 250,
      dateFormatted: "6/25/2025",
      datee: "6/25/2025, 7:15:00 PM",
      id: 6,
      name: "Entertainment",
      serialNo: 6,
      timeFormatted: "7:15:00 PM",
    },
    {
      amount: 300,
      dateFormatted: "7/18/2025",
      datee: "7/18/2025, 3:40:00 PM",
      id: 7,
      name: "Medical",
      serialNo: 7,
      timeFormatted: "3:40:00 PM",
    },
    {
      amount: 100,
      dateFormatted: "8/15/2025",
      datee: "8/15/2025, 10:30:00 AM",
      id: 8,
      name: "Groceries",
      serialNo: 8,
      timeFormatted: "10:30:00 AM",
    },
    {
      amount: 220,
      dateFormatted: "9/10/2025",
      datee: "9/10/2025, 11:10:00 AM",
      id: 9,
      name: "Travel",
      serialNo: 9,
      timeFormatted: "11:10:00 AM",
    },
    {
      amount: 175,
      dateFormatted: "10/22/2025",
      datee: "10/22/2025, 5:55:00 PM",
      id: 10,
      name: "Rent",
      serialNo: 10,
      timeFormatted: "5:55:00 PM",
    },
    {
      amount: 195,
      dateFormatted: "11/30/2025",
      datee: "11/30/2025, 1:30:00 PM",
      id: 11,
      name: "Food",
      serialNo: 11,
      timeFormatted: "1:30:00 PM",
    },
    {
      amount: 280,
      dateFormatted: "12/05/2025",
      datee: "12/05/2025, 8:45:00 AM",
      id: 12,
      name: "Transport",
      serialNo: 12,
      timeFormatted: "8:45:00 AM",
    }
  ]);

  const addItems = (label, amount, category) => {
    const newSerialNo = list.length + 1;
    const newDateTime = new Date().toLocaleString();
    const newDateFormatted = new Date().toLocaleDateString();
    const newTimeFormatted = new Date().toLocaleTimeString();

    const newitems = [
      ...list,
      {
        serialNo: newSerialNo,
        id: newSerialNo,
        name: label,
        amount: parseFloat(amount),
        datee: newDateTime,
        dateFormatted: newDateFormatted,
        timeFormatted: newTimeFormatted,
      },
    ];
    setNewList(newitems);
  };


  let Totalexpense = 0;

  const getTodaysTotal = () => {
    const today = new Date().toLocaleDateString();
    list.forEach((item) => {
      if (item.dateFormatted === today) {
        Totalexpense += item.amount;
      }
    });
  };

 

let Monthlytotal =0;

const getMonthlyTotal = () => {
  const currentMonth = new Date().getMonth(); 
// Get the current month's index

  list.forEach((item) => {
      if (new Date(item.dateFormatted).getMonth() === currentMonth) {
        Monthlytotal += item.amount; 
      }
  });
};

getMonthlyTotal()
getTodaysTotal();

  return (
    <StatementContext.Provider
      value={{
        list,
        addItems,
        Totalexpense,
        Monthlytotal,
      }}
    >
      <div className="mainHome-container">
        <Sidebar />
        <Outlet />
      </div>
    </StatementContext.Provider>
  );
}

export default Home;

// const addItems = (label, amount) => {
//   const newSerialNo = list.length + 1;
//   const newDateTime = new Date().toLocaleString();
//   const newitems = [
//     ...list,
//     {
//       serialNo: newSerialNo,
//       id: newSerialNo,
//       name: label,
//       amount: amount,
//       datee: newDateTime,
//     },
//   ];
//   return setNewList(newitems);
// };
