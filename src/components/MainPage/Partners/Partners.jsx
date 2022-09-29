import React from "react";
import { Section, Title } from "@/components/ui";
import styles from "./Partners.module.scss";

const partnersLinksConfig = [
  {
    name: "AppUnite",
    url: "https://appunite.com",
    icon: "AppUnite.png",
  },
  {
    name: "WithSecure",
    url: "https://www.withsecure.com/",
    icon: "WithSecure.svg",
  },
  {
    name: "Inetum Polska",
    url: "https://inetum.pl/pl/",
    icon: "Inetum.svg",
  },
  {
    name: "Nobl9",
    url: " https://www.nobl9.com/",
    icon: "nobl9.svg",
  },
  {
    name: "Wunderman Thompson Technology",
    url: "https://www.wundermanthompson.com/",
    icon: "WT.svg",
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
