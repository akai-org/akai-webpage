import React from "react";
import Section from "../../components/Section";
import Icon, { facebook, twitter, github } from "../../components/Icon";
import styles from "./Footer.module.scss";

const socialIcons = [
  {
    url: "https://www.facebook.com/akai.pp",
    icon: facebook,
  },
  {
    url: "https://twitter.com/akai_pp",
    icon: twitter,
  },
  {
    url: "https://github.com/akai-org/akai-webpage",
    icon: github,
  },
];

export default function Footer() {
  return (
    <Section className={styles.section}>
      <div className={styles.copyright}>
        <h4 className={styles.heading}>AKAI</h4>
        <span>© 2020 Akademickie Koło Aplikacji Internetowych</span>
      </div>
      <div className={styles.contact}>
        <h4 className={styles.heading}>Kontakt</h4>
        <a href="mailto:kontakt@akai.org.pl" title="email">
          kontakt@akai.org.pl
        </a>
      </div>
      <div className={styles.social}>
        <h2 className={styles.heading}>Znajdź nas</h2>
        <div className={styles.socialIcons}>
          {socialIcons.map(({ url, icon }) => (
            <a href={url} target="_blank" rel="noopener" key={url}>
              <Icon icon={icon} className={styles.icon} />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
