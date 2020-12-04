import React from "react";
import styles from "./Title.module.scss";
import classnames from "classnames";

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
