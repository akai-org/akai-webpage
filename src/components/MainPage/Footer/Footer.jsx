import React from "react";
import { Icon, Section } from "@/components/ui";
import { facebook, github, linkedin, twitter } from "@/components/ui/Icon";
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
  {
    url: "https://linkedin.com/company/akai-pp/",
    icon: linkedin,
    title: "Linkedin",
  },
];

export default function Footer() {
  return (
    <Section className={styles.section}>
      <div className={styles.copyright}>
        <h2 className={styles.heading}>AKAI</h2>
        <p>
          © 2020-{new Date().getFullYear()} Akademickie Koło Aplikacji
          Internetowych
        </p>
      </div>
      <div className={styles.contact}>
        <h2 className={styles.heading}>Kontakt</h2>
        <a href="mailto:kontakt@akai.org.pl" title="email">
          <p>kontakt@akai.org.pl</p>
        </a>
      </div>
      <div className={styles.social}>
        <h2 className={styles.heading}>Znajdź nas</h2>
        <div className={styles.socialIcons}>
          {socialIcons.map(({ url, icon, title }) => (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              key={url}
              title={title}
              className={styles.iconWrapper}
            >
              <Icon icon={icon} className={styles.icon} />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
