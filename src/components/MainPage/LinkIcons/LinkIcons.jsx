import React from "react";
import { Icon, Section, Title } from "@/components/ui";
import {
  apps,
  blog,
  facebook,
  github,
  linkedin,
  twitter,
} from "@/components/ui/Icon";
import styles from "./LinkIcons.module.scss";

const socialLinksConfig = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/akai.pp",
    icon: facebook,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/akai_pp",
    icon: twitter,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/akai-pp/",
    icon: linkedin,
  },
  {
    name: "Github",
    url: "https://github.com/akai-org",
    icon: github,
  },
];

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
];

function LinkIcon({ name, description, url, icon }) {
  return (
    <a
      href={url}
      className={styles.iconLink}
      target="_blank"
      rel="noopener noreferrer"
      key={name}
      title={name}
    >
      <Icon icon={icon} className={styles.icon} />
      <span className={styles.text}>{name}</span>
      {description && <span className={styles.description}>{description}</span>}
    </a>
  );
}

export default function LinkIcons() {
  return (
    <Section className={styles.section} id="obserwuj-nas">
      <Title>Obserwuj nas</Title>
      <div className={styles.iconsWrapper}>
        {socialLinksConfig.map((props) => (
          <LinkIcon {...props} key={props.name} />
        ))}
        {linksConfig.map((props) => (
          <LinkIcon {...props} key={props.name} />
        ))}
      </div>
    </Section>
  );
}
