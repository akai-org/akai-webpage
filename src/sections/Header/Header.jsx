import React from "react";
import classes from "./index.module.scss";
import Button from "../../components/Button";
export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.top}>
          <img src="/img/logo.svg"/>
          <div></div>
      </div>
      <h3>Akai</h3>
      <h1 className={classes.h1}>Webstarter 2020</h1>
      <div className={classes.text}>
        Zbiór prelekcji wprowadzających w świat webdevelopmentu przygotowanych
        przez firmy IT we współpracy z Akademickim Kołem Aplikacji
        Internetowych. Zarezerwuj miejsce
      </div>
      <Button>Zarezerwuj miejsce</Button>
    </header>
  );
}