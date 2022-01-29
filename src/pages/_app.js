import React from "react";
import Navigation from "../components/Navigation/Navigation";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
