import React from "react";
import Section from "../../components/Section";
import Icon, { blog, apps, calendar } from "../../components/Icon";
import styles from "./LinkIcons.module.scss";

const linksConfig = [
  {
    name: "Blog",
    description: "Poczytaj o tym czym się zajmujemy!",
    url: "https://blog.akai.org.pl/",
    icon: blog,
  },
  {
    name: "Apps",
    description: "Nasze aplikacje i projekty",
    url: "https://apps.akai.org.pl/",
    icon: apps,
  },
  {
    name: "Kalendarz",
    description: "Obserwuj nasze spotkania i wydarzenia!",
    url: "#",
    icon: calendar,
  },
];

export default function LinkIcons() {
  return (
    <Section className={styles.section}>
      <div className={styles.container}>
        {linksConfig.map(({ name, description, url, icon }) => (
          <a href={url} key={name}>
            <div className={styles.iconContainer}>
              <Icon icon={icon} className={styles.icon} />
              <span className={styles.text}>{name}</span>
              <span className={styles.description}>{description}</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
