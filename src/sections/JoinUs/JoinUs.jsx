import React from "react";
import Section from "../../components/Section";
import Title from "../../components/Title";
import Button from "../../components/Button";
import styles from "./JoinUs.module.scss";
import Img from "next/image";
const mockDescription =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit odit quod a tempore facere quia earum eaque, ab ipsum, reprehenderit optio necessitatibus commodi iste deleniti? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit odit quod a tempore facere quia earum eaque, ab ipsum, reprehenderit optio necessitatibus commodi iste deleniti?";

const sections = [
  ["Front-end development", "section-frontend.jpg"],
  ["Backend-end development", "section-backend.jpg"],
  ["Mobile development", "section-mobile.jpg"],
  ["Graphic design", "section-design.jpg"],
].map(([a, b]) => ({
  name: a,
  description: mockDescription,
  img: `/img/${b}`,
}));

export default function JoinUs() {
  return (
    <Section className={styles.section}>
      <Title>Dołącz do Nas</Title>
      <p className={styles.description}>
        Interesujesz się back-endem, front-endem, masz wyczucie designu czy może
        chcesz sprawdzić swoje zdolności do zarządzania i organizacji? Dołącz do
        nas, w każdej z tych ról będziesz mógł się realizować w AKAI.
      </p>
      {sections.map(({ name, description, img }) => (
        <div className={styles.sectionDetails} key={name}>
          <div className={styles.sectionColumn}>
            <Img
              src={img}
              alt={name}
              className={styles.sectionImage}
              loading="eager"
              unsized
              quality={100}
              layout="fixed"
            />
          </div>
          <div className={styles.sectionColumn}>
            <Title>{name}</Title>
            <p>{description}</p>
          </div>
        </div>
      ))}
      <div className={styles.contactWrapper}>
        <Title>Chcesz do nas dołączyć?</Title>
        <a href="mailto:kontakt@akai.org.pl" title="email">
          <Button>Skontaktuj się z nami!</Button>
        </a>
      </div>
    </Section>
  );
}
