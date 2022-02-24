import React from "react";
import { Section, Title } from "@/components/ui";
import styles from "./Partners.module.scss";

const partnersLinksConfig = [
  {
    name: "AppUnite",
    url: "https://appunite.com/",
    icon: "AppUnite.png",
  },
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
      <img
        src={`/img/partners/${icon}`}
        alt={`Logo ${name}`}
        className={styles.partnerIcon}
      />
    </a>
  );
}

export default function Partners() {
  return (
    <Section className={styles.section} id="partnerzy">
      <Title>Partnerzy</Title>
      <div className={styles.partnersIconsWrapper}>
        {partnersLinksConfig.map((props) => (
          <PartnerLink {...props} key={props.name} />
        ))}
      </div>
    </Section>
  );
}