import React, { useState, useRef } from "react";

const Expense = (props) => {
  const [amount, setAmount] = useState("");
  const textInputRef = useRef();

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const addExpenseHandler = (event) => {
    event.preventDefault();
    if (props.totalamounts <= 0) {
      return;
    }
    props.fetchExpense(textInputRef.current.value, amount);

    textInputRef.current.value = "";
    setAmount("");
  };

  return (
    <div className="mb-5">
      <form onSubmit={addExpenseHandler}>
        <input className="p-1 mr-3"
          type="text"
          name="expense"
          id="expense"
          placeholder="Enter Text"
          ref={textInputRef}
        />
        <input className="p-1 mr-3"
          type="number"
          name="amount"
          id="amount"
          placeholder="Enter Amount"
          value={amount}
          onChange={amountChangeHandler}
        />
        <button className="bg-red-600 px-2 py-1 rounded-md text-white" type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default Expense;
