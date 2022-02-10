import "./Expenses.scss";
import react, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

export default function Expenses(props) {
  const [year, setYear] = useState('2020');
  const setFilterYear = (year) => {
    setYear(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter year={year} onChangeFilter={setFilterYear} />
      {props.expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </Card>
  );
}
