import React from "react";

const IncomeExpenseList = (props) => {
  return (
    <div>
      <div className="font-bold text-2xl mb-3 border border-b-gray-400 pb-2">History</div>
      <div>
        {props.lists.map((list) => (
          <ul className="w-full flex justify-between">
            <div key={list.id} className="flex justify-between py-1 w-full bg-white border-b-gray-200 border-2">
              <li className="pl-1">{list.text}</li>
              <li className={`${'pr-2'} ${list.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>{list.amount}</li>
             
            </div>
            <div className={`${'border border-r-4 my-[2px]'} ${list.type === 'income' ? 'border-green-600' : 'border-red-600'}`}></div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default IncomeExpenseList;
