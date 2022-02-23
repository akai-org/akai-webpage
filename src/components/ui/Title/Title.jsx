import React from "react";
import classnames from "classnames";
import styles from "./Title.module.scss";

const alignments = {
  center: styles.center,
  left: styles.left,
};

export default function Title({ children, className, alignment = "center" }) {
  return (
    <h2 className={classnames(styles.title, alignments[alignment], className)}>
      {children}
    </h2>
  );
}
