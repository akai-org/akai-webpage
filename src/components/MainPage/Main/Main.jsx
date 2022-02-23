import React from "react";
import classnames from "classnames";
import classes from "./Main.module.scss";

export default function Main() {
  return (
    <header className={classnames(classes.header, "section")} id="main">
      <h1 className={classes.title}>
        Akademickie Koło <br />
        Aplikacji Internetowych
      </h1>
      <p className={classes.text}>
        Działamy na terenie całego Poznania. Damy Ci szansę rozwinąć Twoją pasję
        oraz wiedzę. Pokażemy Ci jak rozpocząć karierę bazując na doświadczeniu
        i umiejętnościach - nie na papierze.
        <br />
        Serdecznie zapraszamy do wzięcia udziału w naszych wydarzeniach - są
        bezpłatne i otwarte dla wszystkich.
      </p>
    </header>
  );
}
