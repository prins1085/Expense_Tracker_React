import React, { useState, useRef } from "react";
import Card from "../UI/Card";

const Income = (props) => {
  const [amount, setAmount] = useState("");
  const textInputRef = useRef();

  const addIncomeHandler = () => {
    if (textInputRef.current.value.trim().length === 0 || +amount <= 0) {
      return;
    }
    props.fetchIncome(textInputRef.current.value, amount, "income");

    textInputRef.current.value = "";
    setAmount("");
  };

  const addExpenseHandler = () => {
    if (
      textInputRef.current.value.trim().length === 0 ||
      +amount <= 0 ||
      props.totalamounts < +amount
    ) {
      return;
    }
    props.fetchIncome(textInputRef.current.value, amount, "expense");

    textInputRef.current.value = "";
    setAmount("");
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  return (
    <Card>
     
        <div className="flex">
          <input
            className="p-1 mr-3 mb-3 border border-1"
            type="text"
            name="income"
            id="income"
            placeholder="Enter Text"
            ref={textInputRef}
          />
          <input
            className="p-1 mb-3 border border-1"
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter Amount"
            value={amount}
            onChange={amountChangeHandler}
          />
    </div>
        <div className="space-x-2">
          <button
            className="bg-green-600 px-2 py-1 rounded-md text-white"
            onClick={addIncomeHandler}
          >
            Add Income
          </button>
          <button
            className="bg-red-600 px-2 py-1 rounded-md text-white"
            onClick={addExpenseHandler}
          >
            Add Expense
          </button>
        </div>
    
    </Card>
  );
};

export default Income;
