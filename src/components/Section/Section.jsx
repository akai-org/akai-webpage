import React from "react";
import classnames from "classnames";
import styles from "./Section.module.scss";

export default function Section({ children, className, ...props }) {
  return (
    <section className={classnames(styles.section, "section")} {...props}>
      <div className={classnames(styles.contentWrapper, className)}>
        {children}
      </div>
    </section>
  );
}
