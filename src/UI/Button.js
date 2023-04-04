import React from "react";

const Button = (props) => {
  return (
    <button
      className={`${"px-2 py-1 rounded-md text-white"} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
