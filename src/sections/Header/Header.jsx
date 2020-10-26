import React from "react";
import classes from "./index.module.scss";
export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.top}>
        <img src="/img/logo.svg" />
      </div>
      <h1 className={classes.title}>
        Akademickie Koło <br />
        Aplikacji Internetowych
      </h1>
      <div className={classes.space}></div>
      <div className={classes.text}>
        Działamy na terenie całego Poznania. Damy Ci szansę rozwinąć Twoją pasję
        oraz wiedzę. Pokażemy Ci jak rozpocząć karierę bazując na doświadczeniu
        i umiejętnościach - nie na papierze. Serdecznie zapraszamy do wzięcia
        udziału w naszych wydarzeniach - są bezpłatne i otwarte dla wszystkich.
      </div>
    </header>
  );
}
