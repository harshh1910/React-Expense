import React, { useContext } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import StatementContext from "../../StatementContext";

function Charts() {
  const { list } = useContext(StatementContext);

  const calculateMonthlyExpenses = (list) => {
    // Create an array with 12 elements initialized to 0
    const monthlyExpenses = Array(12).fill(0);

    list.forEach((item) => {
      const itemDate = new Date(item.dateFormatted);
      const monthIndex = itemDate.getMonth(); // Get month index (0-11)

      // Add expense amount to the corresponding month
      monthlyExpenses[monthIndex] += item.amount;
    });

    return monthlyExpenses;
  };

  const month = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const monthlyExpenses = calculateMonthlyExpenses(list);

  // Example usage

  // const {Totalexpense,Monthlytotal} = useContext(StatementContext)

  return (
    <div className="Chart-container">
      <div className="dataCard revenueCard">
        <Line
          data={{
            labels: month.map((item) => item),
            datasets: [
              {
                label: "count",
                data: monthlyExpenses.map((item) => item),
                backgroundColor: [
                  "rgba(43,63,229,0.8)",
                  "rgba(250,192,19,0.8)",
                  "rgba(253,153,153,0.8)",
                ],
                borderRadius: 5,
                pointHoverBackgroundColor: "rgba(255, 165, 0, 1)", // Orange on hover
                pointHoverBorderColor: "rgba(255, 165, 0, 1)", // Orange on hover
                borderColor: "rgba(101, 89, 89, 0.68)", // White line for visibility
                
              },
            ],
          }}
        />
      </div>
      <div className="dataCard customerCard ">
        <Bar
          data={{
            labels: month.map((item) => item),
            datasets: [
              {
                label: "count",
                data: monthlyExpenses.map((item) => item),
                backgroundColor: [
                  "rgba(43,63,229,0.8)",
                  "rgba(250,192,19,0.8)",
                  "rgba(253,153,153,0.8)",
                ],
                borderRadius: 5,
              },
            ],
          }}
        />
      </div>
     
    </div>
  );
}

export default Charts;
