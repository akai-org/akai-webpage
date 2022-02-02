import React from "react";
import SEO from "../components/SEO";
import Main from "../sections/Main";
import About from "../sections/About";
import LinkIcons from "../sections/LinkIcons";
import JoinUs from "../sections/JoinUs";
import Footer from "../sections/Footer";
import Partners from "../sections/Partners/Partners";

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
