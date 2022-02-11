import "./Expenses.scss";
import react, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [year, setYear] = useState("all");
  const setFilterYear = (year) => {
    setYear(year);
  };
  const filteredExpenses =
    year !== "all"
      ? props.expenses.filter((x) => x.date.getFullYear().toString() === year)
      : props.expenses;
  return (
    <Card className="expenses">
      <ExpensesFilter year={year} onChangeFilter={setFilterYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
