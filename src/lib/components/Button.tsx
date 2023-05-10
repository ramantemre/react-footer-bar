import React from "react";
import { ButtonType } from "../types/Button.types";
const Button = (props: ButtonType) => {
  const { className, style, type, onClick, disabled, label } = props;
  return (
    <button
      className={className}
      style={style}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
export default Button;
