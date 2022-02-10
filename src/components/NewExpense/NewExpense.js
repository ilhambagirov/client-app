import react from "react";
import Card from "../UI/Card";
import ExpenseForm from "../NewExpense/ExpenseForm";
import './NewExpense.scss'
export default function NewExpense(props) {
  const saveExpenseDataHandler = (newExpense) => {
    let expense = {
      ...newExpense,
      id : Math.random().toString()
    };
   props.addNewExpense(expense)
  }
  return (
    <Card className="new-expense">
      <ExpenseForm onSaveDataExpense = {saveExpenseDataHandler} />
    </Card>
  );
}
