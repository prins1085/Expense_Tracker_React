import "./App.css";
// import Expense from "./components/Expense";
import Income from "./components/Income";
import IncomeExpenseList from "./components/IncomeExpenseList";
import TotalAmount from "./components/TotalAmount";
import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [totalamount, setTotalAmount] = useState(0);

  const addIncomeHandler = (uText, uAmount, uType) => {
    const IncomeAmount = +uAmount;
    setList((prevList) => {
      return [
        ...prevList,
        {
          text: uText,
          amount: uAmount,
          id: Math.random().toString(),
          type: uType,
        },
      ];
    });
    setTotalAmount((prevAmount) => {
      if (uType === "income") {
        return prevAmount + IncomeAmount;
      } else {
        if(uAmount > totalamount){
          return;
        }
        return prevAmount - IncomeAmount;
      }
    });
  };

  // const addExpenseHandler = (uText, uAmount) => {
  //   const ExpenseAmount = +uAmount;
  //   setList((prevList) => {
  //     return [...prevList, { text: uText, amount: uAmount, id:Math.random().toString() }];
  //   });
  //   setTotalAmount(prevAmount => {
  //     return prevAmount - ExpenseAmount;
  //   })
  // };

  return (
    <div className="App bg-gray-200 h-[100vh]">
      <h1 className="text-3xl font-bold pt-2 mb-8 flex justify-center">
        Expense Tracker
      </h1>
      <div className="mx-auto w-fit text-left">
        <TotalAmount totalamounts={totalamount} />
        <Income fetchIncome={addIncomeHandler} totalamounts={totalamount} />
        {/* <Expense  /> */}
        <IncomeExpenseList lists={list} />
      </div>
    </div>
  );
}

export default App;
