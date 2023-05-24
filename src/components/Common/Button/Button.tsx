import React from "react";
import styles from "./Button.module.css";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  children,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={styles.buttonWrapper} onClick={onClick}>
    {children}
  </button>
);

export default Button;
