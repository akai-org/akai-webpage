import React from "react";
import Section from "../../components/Section";
import Icon, { facebook, twitter, github } from "../../components/Icon";
import styles from "./Footer.module.scss";
import Email from "../../components/Email";
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
        <h2 className={styles.heading}>AKAI</h2>
        <p>© 2020 Akademickie Koło Aplikacji Internetowych</p>
      </div>
      <div className={styles.contact}>
        <h2 className={styles.heading}>Kontakt</h2>
        <Email>
          <p
            dangerouslySetInnerHTML={{ __html: `kontakt&#64;akai.org.pl` }}
          />
        </Email>
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
              titile={title}
            >
              <Icon icon={icon} className={styles.icon} />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
