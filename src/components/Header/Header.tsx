import React from "react";
import styles from "./Header.module.css";

const Header: React.FC<React.HTMLProps<HTMLElement>> = ({
  children,
}: React.HTMLProps<HTMLElement>) => (
  <header className={styles.headerWrapper}>{children}</header>
);

export default Header;
