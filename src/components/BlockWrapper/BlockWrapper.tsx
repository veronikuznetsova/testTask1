import React from "react";
import styles from "./BlockWrapper.module.css";

const BlockWrapper: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children,
}: React.HTMLProps<HTMLDivElement>) => (
  <div className={styles.blockWrapper}>{children}</div>
);

export default BlockWrapper;
