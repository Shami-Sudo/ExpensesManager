import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/ExpenseThings";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Bag",
    amount: 2500,
    date: new Date(2023, 7, 14),
  },
  { id: "e2", 
  title: "Biscuits", 
  amount: 100, 
  date: new Date(2022, 2, 12) },
  {
    id: "e3",
    title: "Laptop",
    amount: 50000,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 10500,
    date: new Date(2023, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
