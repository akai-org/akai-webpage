import React from "react";
import classes from "./Main.module.scss";

export default function Main() {
  return (
    <header className={classes.header}>
      <div className={classes.top}>
        <img src={require("../../assets/img/logo.svg")} />
      </div>
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
