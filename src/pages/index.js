import Head from "next/head";
import Button from "../components/Button";
import Section from "../components/Section";

export default function Home() {
  return (
    <main>
      <Head>
        <title>AKAI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>Main</Section>
      <Section>O AKAI</Section>
      <Section>Linki jako ikony - Blog, Apps, Kalendarz</Section>
      <Section>Dołącz do Nas</Section>
      <Section>Footer</Section>
    </main>
  );
}
