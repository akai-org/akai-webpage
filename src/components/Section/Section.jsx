import React from "react";
import classnames from "classnames";
import styles from "./Section.module.scss";

export default function Section({ children, className }) {
  return (
    <section className={styles.section}>
      <div className={classnames(styles.contentWrapper, className)}>
        {children}
      </div>
    </section>
  );
}
