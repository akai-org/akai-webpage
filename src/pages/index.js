import React from "react";
import SEO from "@/components/SEO";
import {
  About,
  JoinUs,
  LinkIcons,
  Main,
  Partners,
  Footer,
} from "@/components/MainPage";

export default function Home() {
  return (
    <main>
      <SEO />
      <Main />
      <About />
      <LinkIcons />
      <JoinUs />
      <Partners />
      <Footer />
    </main>
  );
}
