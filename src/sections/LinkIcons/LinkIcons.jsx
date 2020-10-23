import React from "react";
import Section from "../../components/Section";
import Icon, { blog, apps, calendar } from "../../components/Icon";
import styles from "./LinkIcons.module.scss";

export default function LinkIcons() {
  return (
    <Section className={styles.section}>
      <div className={styles.container}>
        <a href="https://blog.akai.org.pl/">
          <div className={styles.iconContainer}>
            <Icon icon={blog} className={styles.icon} />
            <span className={styles.text}>Blog</span>
            <span className={styles.description}>
              Poczytaj o tym co robimy i&nbsp;czym się zajmujemy!
            </span>
          </div>
        </a>
        <a href="https://apps.akai.org.pl/">
          <div className={styles.iconContainer}>
            <Icon icon={apps} className={styles.icon} />
            <span className={styles.text}>Apps</span>
            <span className={styles.description}>
              Nasze aplikacje i&nbsp;projekty
            </span>
          </div>
        </a>
        <a href="#">
          <div className={styles.iconContainer}>
            <Icon icon={calendar} className={styles.icon} />
            <span className={styles.text}>Kalendarz</span>
            <span className={styles.description}>
              Obserwuj nasze spotkania i&nbsp;wydarzenia!
            </span>
          </div>
        </a>
      </div>
    </Section>
  );
}
