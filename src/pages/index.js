import React from "react";
import Section from "../components/Section";
import SEO from "../components/SEO";
import Title from "../components/Title";
import LinkIcons from "../sections/LinkIcons/LinkIcons";

export default function Home() {
  return (
    <main>
      <SEO title="Homepage" />
      <Section>
        <Title>Main</Title>
      </Section>
      <Section>
        <Title alignment="left">O AKAI</Title>
      </Section>
      <LinkIcons />
      <Section>
        <Title>Dołącz do Nas</Title>
      </Section>
      <Section>Footer</Section>
    </main>
  );
}
