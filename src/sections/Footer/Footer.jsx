import React from "react";
import Button from '../../components/Button'
import classes from "./index.module.scss";
import { FaFacebookF, FaTwitter, FaBlog } from "react-icons/fa";

export default function index() {
  return (
    <footer className={classes.footer}>
      <div>
        <h4>AKAI</h4>
        © 2017-2020
        <br />
        Akademickie Koło Aplikacji Internetowych
      </div>
      <div>
        <h4>Kontakt</h4>
        <a href="mailto:kontakt@akai.org.pl" title="email">
          kontakt@akai.org.pl
        </a>
      </div>
      <div>
        <h4>Znajdź nas</h4>
        <div className={classes.social}>
          <a
            href="https://www.facebook.com/akai.pp"
            target="_blank"
            rel="noreferrer noopener"
            title="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/akai.pp"
            target="_blank"
            rel="noreferrer noopener"
            title="Twitter"
          >
            <FaTwitter />
          </a>

          <a
            href="https://blog.akai.org.pl/"
            target="_blank"
            rel="noreferrer noopener"
            title="Twitter"
          >
            <FaBlog />
          </a>
        </div>
      </div>
    </footer>
  );
}
