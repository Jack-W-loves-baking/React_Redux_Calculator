import React from "react";
import "./Button.css";

const Button = ({ id, text, className = "numberButton", onClick }) => {
  return (
    <button className={className} id={id} value={text} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
