import React from "react";
import styles from "./Text.module.css";

const Text: React.FC<React.HTMLProps<HTMLParagraphElement>> = ({
  children,
}: React.HTMLProps<HTMLParagraphElement>) => (
  <p className={styles.titleWrapper}>{children}</p>
);

export default Text;
