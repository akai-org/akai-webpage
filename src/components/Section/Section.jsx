import React from "react";
import classnames from "classnames";
import styles from "./Section.module.scss";

export default function Section({ children, className }) {
  return (
    <section className={classnames(styles.section, className)}>
      {children}
    </section>
  );
}
