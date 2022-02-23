import Navigation from "@/components/ui/Navigation/Navigation";
import React from "react";

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
