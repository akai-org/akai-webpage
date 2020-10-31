import React from "react";
import SEO from "../components/SEO";
import Main from "../sections/Main";
import LinkIcons from "../sections/LinkIcons";
import Footer from "../sections/Footer";
import Section from "../components/Section";
import Title from "../components/Title";

export default function Home() {
  return (
    <main>
      <SEO />
      <Main />
      <Section>
        <Title alignment="left">O AKAI</Title>
      </Section>
      <LinkIcons />
      <Section>
        <Title>Dołącz do Nas</Title>
      </Section>
      <Footer />
    </main>
  );
}
