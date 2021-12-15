import React from "react";
import Section from "../../components/Section";
import Title from '../../components/Title/Title';
import Icon, {
  apps
} from "../../components/Icon";
import styles from "./Partners.module.scss";

const partnersLinksConfig = [
  {
    name: "Logobrand",
    url: "#",
    icon: apps,
  },
  {
    name: "Logobrand",
    url: "#",
    icon: apps,
  },
  {
    name: "Logobrand",
    url: "#",
    icon: apps,
  },
  {
    name: "Logobrand",
    url: "#",
    icon: apps,
  },
  {
    name: "Logobrand",
    url: "#",
    icon: apps,
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
      <Icon icon={icon} className={styles.partnerIcon} />
      <span className={styles.text}>{name}</span>
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
