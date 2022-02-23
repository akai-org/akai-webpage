import React from "react";
import classnames from "classnames";
import styles from "./Icon.module.scss";

export default function Icon({ icon, className }) {
  return (
    <svg viewBox="1 1 21 21" className={classnames(styles.icon, className)}>
      <path d={icon} />
    </svg>
  );
}
