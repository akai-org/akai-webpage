import React from "react";
import Section from "../../components/Section";
import Title from '../../components/Title/Title';
import styles from "./Partners.module.scss";

const partnersLinksConfig = [
  {
    name: "F-Secure",
    url: "https://www.f-secure.com/pl",
    icon: "F-Secure.png",
  },
  {
    name: "AppUnite",
    url: "https://appunite.com/",
    icon: "AppUnite.png",
  }
];

function PartnerLink({ name, url, icon }) {
  return (
    <a
      href={url}
      className={styles.partnerLink}
      target="_blank"
      rel="noopener noreferrer"
      key={name}
      title={name}
    >
      <img src={'/img/partners/'+icon} alt={'Logo '+name} className={styles.partnerIcon} />
    </a>
  );
}

export default function Partners() {
  return (
    <Section className={styles.section}>
      <Title>Partnerzy</Title>
      <div className={styles.partnersIconsWrapper}>
        {partnersLinksConfig.map((props) => (
          <PartnerLink {...props} key={props.name} />
        ))}
      </div>
    </Section>
  );
}
