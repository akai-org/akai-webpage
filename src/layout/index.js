import React from "react";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";

export default function index({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
