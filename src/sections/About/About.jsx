import React from "react";
import Section from "../../components/Section";
import Title from "../../components/Title";
import styles from "./About.module.scss";

export default function About() {
  return (
    <Section className={styles.section}>
      <Title alignment="left" className={styles.title}>
        O AKAI
      </Title>
      <div className={styles.sectionDetails}>
        <div className={styles.sectionColumn}>
          <img src="/img/akai.jpg" className={styles.sectionImage} alt="Grupowe zdjęcie AKAI"/>
        </div>
        <div className={styles.sectionColumn}>
          <p>
            <span className={styles.highlight}>
              Akademickie Koło Aplikacji Internetowych
            </span>{" "}
            rozpoczęło swoją działalność na Wydziale Informatyki Politechniki
            Poznańskiej w 2010 roku. Naszym członkiem może być każdy student,
            niezależnie na jakiej uczelni studiuje. Skupiamy młodych i ambitnych
            ludzi, którzy jako cel stawiają sobie rozwój i osiągnięcie sukcesu w
            dziedzinie aplikacji internetowych. Zależy nam na promowaniu idei
            sieci budowanej przez profesjonalistów, którzy znają wartość swojej
            wiedzy i są zawsze głodni nowych umiejętności i doświadczenia.
          </p>
          <p>
            Liczymy, że realizacje w sektorze prywatnym oraz publicznym, dadzą
            członkom <span className={styles.highlight}>AKAI</span> szansę na
            budowanie profesjonalizmu i zdobycie tak ważnego doświadczenia dla
            obecnej i przyszłej działalności. Staramy się nawiązywać współpracę
            z placówkami naukowymi, przedstawicielami firm oraz znanymi
            specjalistami ze świata IT. Jesteśmy gotowi podejmować kolejne
            wyzwania i pokazywać, że wiedza i doświadczenie przekazywane przez
            naszą organizacja stanowi przyszłość projektowania aplikacji
            internetowych.
          </p>
        </div>
      </div>
    </Section>
  );
}
