import React from "react";
import Section from "../../components/Section";
import Title from "../../components/Title";
import Button from "../../components/Button";
import styles from "./JoinUs.module.scss";

const mockDescription =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit odit quod a tempore facere quia earum eaque, ab ipsum, reprehenderit optio necessitatibus commodi iste deleniti? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit odit quod a tempore facere quia earum eaque, ab ipsum, reprehenderit optio necessitatibus commodi iste deleniti?";

const sections = [
  {
    name: "Front-end development",
    description: "Wszystko to, co widzi użytkownik. Interfejs aplikacji. W przypadku aplikacji internetowych powstaje przy pomocy HTML, CSS i JS.",
    img: "/img/section-frontend.jpg",
  },
  {
    name: "Back-end development",
    description: "Oprogramowanie uruchamiane po stronie serwera. Przetwarza dane i wykonuje różne operacje. To tutaj dzieje się magia. W kole korzystamy z różnych języków programowania (m. in. Python, Java, PHP, Go, Ruby)",
    img: "/img/section-backend.jpg",
  },
  {
    name: "Mobile development",
    description: "Aplikacje mobilne, zarówno natywne na iOS i Android (Kotlin), jak i przy użyciu Fluttera. Czasami tworzymy też PWA.",
    img: "/img/section-mobile.jpg",
  },
  {
    name: "Graphic design / UI / UX",
    description: "Zanim coś stworzymy, warto to zaprojektować. No i dobrze, żeby wyglądało przyjemnie dla oka.",
    img: "/img/section-design.jpg",
  },
];

export default function JoinUs() {
  return (
    <Section className={styles.section}>
      <Title>Dołącz do Nas</Title>
      <p className={styles.description}>
        Interesujesz się back-endem, front-endem, masz wyczucie designu czy może
        chcesz sprawdzić swoje zdolności do zarządzania i organizacji? Dołącz do
        nas, w każdej z tych ról będziesz mógł się realizować w AKAI.
      </p>
      {sections.map(({name, description, img}) => (
        <div className={styles.sectionDetails} key={name}>
          <div className={styles.sectionColumn}>
            <img src={img} className={styles.sectionImage}/>
          </div>
          <div className={styles.sectionColumn}>
            <Title alignment="left">{name}</Title>
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
