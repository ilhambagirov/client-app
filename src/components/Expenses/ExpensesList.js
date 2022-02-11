import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.scss";
export default function ExpensesList(props) {
  if (props.items.length === 0) {
    return (
      <h4 className="expenses-list__fallback">
        We found no Expense for this year!
      </h4>
    );
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
}
