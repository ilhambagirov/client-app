import react, { useState } from "react";
import Card from "../UI/Card";
import ExpenseForm from "../NewExpense/ExpenseForm";
import "./NewExpense.scss";
export default function NewExpense(props) {
  const [formMode, setFormMode] = useState(0);
  const saveExpenseDataHandler = (newExpense) => {
    let expense = {
      ...newExpense,
      id: Math.random().toString(),
    };
    props.addNewExpense(expense);
  };
  return (
    <Card className="new-expense">
      {console.log(formMode)}
      {formMode === 0 ? (
        <button onClick={()=>setFormMode(1)}>Add Expense</button>
      ) : (
        <ExpenseForm setFormMode ={setFormMode} onSaveDataExpense={saveExpenseDataHandler} />
      )}
    </Card>
  );
}
