import React from "react";
import Section from "../../components/Section";
import Icon, { facebook, twitter, github } from "../../components/Icon";
import styles from "./Footer.module.scss";

const socialIcons = [
  {
    url: "https://www.facebook.com/akai.pp",
    icon: facebook,
    title: "Facebook",
  },
  {
    url: "https://twitter.com/akai_pp",
    icon: twitter,
    title: "Twitter",
  },
  {
    url: "https://github.com/akai-org",
    icon: github,
    title: "Github",
  },
];

export default function Footer() {
  return (
    <Section className={styles.section}>
      <div className={styles.copyright}>
        <h3 className={styles.heading}>AKAI</h3>
        <span>© 2020 Akademickie Koło Aplikacji Internetowych</span>
      </div>
      <div className={styles.contact}>
        <h3 className={styles.heading}>Kontakt</h3>
        <a href="mailto:kontakt@akai.org.pl" title="email">
          kontakt@akai.org.pl
        </a>
      </div>
      <div className={styles.social}>
        <h2 className={styles.heading}>Znajdź nas</h2>
        <div className={styles.socialIcons}>
          {socialIcons.map(({ url, icon ,title}) => (
            <a
              href={url}
              title={title}
              key={url}
              target="_blank"
              rel="noopener"
            >
              <Icon icon={icon} className={styles.icon} />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
