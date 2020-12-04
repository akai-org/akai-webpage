import React from "react";
import Section from "../../components/Section";
import Title from "../../components/Title";
import styles from "./About.module.scss";

export default function About() {
  return (
    <Section className={styles.section}>
      <div className={styles.sectionDetails}>
        <div className={styles.sectionColumn}>
          <Title alignment="left">O AKAI</Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            repellendus laudantium earum rem repellat, quia atque quod
            consectetur praesentium, harum accusamus voluptates dolore,
            distinctio corporis nemo? Architecto modi suscipit rem facilis
            tenetur id. Maxime incidunt, laborum tempore dolore at aliquam
            accusantium exercitationem ex sed repellendus quibusdam aperiam
            soluta commodi magnam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aspernatur repellendus laudantium earum rem
            repellat, quia atque quod consectetur praesentium, harum accusamus
            voluptates dolore, distinctio corporis nemo? Architecto modi
            suscipit rem facilis tenetur id. Maxime incidunt, laborum tempore
            dolore at aliquam accusantium exercitationem ex sed repellendus
            quibusdam aperiam soluta commodi magnam!
          </p>
        </div>
        <div className={styles.sectionColumn}>
          <img src="/img/section-design.jpg" className={styles.sectionImage} />
        </div>
      </div>
    </Section>
  );
}
