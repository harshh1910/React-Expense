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
  
  // Example usage
  const list = [
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
      amount: 150,
      dateFormatted: "2/11/2025",
      datee: "2/11/2025, 1:47:50 AM",
      id: 4,
      name: "Transport",
      serialNo: 4,
      timeFormatted: "1:47:50 AM",
    },
    {
      amount: 100,
      dateFormatted: "8/15/2025",
      datee: "8/15/2025, 10:30:00 AM",
      id: 5,
      name: "Groceries",
      serialNo: 5,
      timeFormatted: "10:30:00 AM",
    },
  ];
  const month = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

  const monthlyExpenses = calculateMonthlyExpenses(list);
  month.map((item)=>console.log(item))  
 monthlyExpenses.map((item)=>console.log(item))