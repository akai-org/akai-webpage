import React from "react";
import classnames from "classnames";
import styles from "./Section.module.scss";

export default function Section({ children, className, id }) {
  return (
    <section className={classnames(styles.section, id && "section")} id={id}>
      <div className={classnames(styles.contentWrapper, className)}>
        {children}
      </div>
    </section>
  );
}
