import React from "react";
import Card from "../UI/Card";

const TotalAmount = (props) => {
  return (
    <Card>
      <div className="flex flex-col font-medium">
        <span className="text-sm">YOUR BALANCE </span>
        <span className="text-2xl">$ {props.totalamounts}</span>
      </div>
    </Card>
  );
};

export default TotalAmount;
