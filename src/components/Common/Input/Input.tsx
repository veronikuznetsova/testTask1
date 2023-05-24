import React from "react";
import styles from "./Input.module.css";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  value,
  placeholder,
  onChange,
  type,
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
      className={styles.inputWrapper}
    />
  );
};

export default Input;
