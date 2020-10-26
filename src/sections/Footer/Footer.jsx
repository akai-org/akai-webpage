import React from "react";
import Section from "../../components/Section";
import Icon, { facebook, twitter } from "../../components/Icon";
import AkaiIcon from "../../assets/logo-grey.svg";
import styles from "./Footer.module.scss";

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
        <h4 className={styles.heading}>Znajdź nas</h4>
        <div className={styles.socialIcons}>
          <a className={styles.icon} href="https://www.facebook.com/akai.pp">
            <Icon icon={facebook} />
          </a>
          <a className={styles.icon} href="https://twitter.com/akai.pp">
            <Icon icon={twitter} />
          </a>
          <a className={styles.icon} href="https://blog.akai.org.pl/">
            <AkaiIcon className={styles.akaiIcon} />
          </a>
        </div>
      </div>
    </Section>
  );
}
