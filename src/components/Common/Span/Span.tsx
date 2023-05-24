import React from "react";
import styles from "./Span.module.css";

const Span: React.FC<React.HTMLProps<HTMLSpanElement>> = ({
  children,
}: React.HTMLProps<HTMLSpanElement>) => (
  <span className={styles.spanWrapper}>{children}</span>
);

export default Span;
