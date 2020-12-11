import React from "react";
import Section from "../../components/Section";
import Title from "../../components/Title";
import Button from "../../components/Button";
import styles from "./JoinUs.module.scss";

const sections = [
  {
    name: "Front-end development",
    description:
      "Wszystko to, co widzi użytkownik. Odpowiada za wygląd i zachowanie strony lub aplikacji internetowej. Powstaje przy pomocy HTML, CSS i JavaScript, ale w dzisiejszych czasach często nie jest to wystarczające. Dlatego często korzystamy z różnych frameworków jak React, Vue, Next.js i Gatsby.",
    img: "/img/section-frontend.jpg",
  },
  {
    name: "Back-end development",
    description:
      "Oprogramowanie uruchamiane po stronie serwera. Przetwarza dane i wykonuje różne operacje. To tutaj dzieje się magia. W kole korzystamy z różnych języków programowania (m. in. Python, Java, PHP, Go, Ruby)",
    img: "/img/section-backend.jpg",
  },
  {
    name: "Mobile development",
    description:
      "Świat aplikacji mobilnych, dostępnych na wyciągnięcie ręki, na urządzeniach z systemami iOS i Android. Aplikacje piszemy najczęściej natywnie dla Android'a w języku Kotlin lub multiplatform przy użyciu Flutter'a. W ramach sekcji mobile tworzymy także czasem PWA.",
    img: "/img/section-mobile.jpg",
  },
  {
    name: "Graphic design / UI / UX",
    description:
      "Zanim coś stworzymy, warto to zaprojektować. Oprócz tego, żeby było przyjemne dla oka - warto również zadbać o to, aby interfejs był intuicyjny dla użytkownika.",
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
      {sections.map(({ name, description, img }) => (
        <div className={styles.sectionDetails} key={name}>
          <div className={styles.sectionColumn}>
            <img src={img} className={styles.sectionImage} />
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
