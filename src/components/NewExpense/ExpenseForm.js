import react, { useState } from "react";
import "./ExpenseForm.scss";
export default function NewExpense(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    console.log(date);
  };
  // const [expense, setExpense] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  // const titleChangeHandler = (event) => {
  //   setExpense((prevState)=>{
  //     return {...prevState, title: event.target.value }
  //   });
  // };

  // const amountChangeHandler = (event) => {
  //   setExpense((prevState)=>{
  //     return {...prevState, amount: event.target.value }
  //   });
  // };

  // const dateChangeHandler = (event) => {
  //   setExpense((prevState)=>{
  //     return {...prevState, date: event.target.value }
  //   });
  //   console.log(expense)
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    let newExpense = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveDataExpense(newExpense);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={title}
            onChange={titleChangeHandler}
            type="text"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            onChange={amountChangeHandler}
            type="number"
            min="00.1"
            step="0.01"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date </label>
          <input
            value={date}
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
