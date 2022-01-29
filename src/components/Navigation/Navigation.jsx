import { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import throttle from "lodash.throttle";
import styles from "./Navigation.module.scss";
import Image from "next/image";

const sections = [
  {
    name: "O AKAI",
    url: "#o-akai",
  },
  {
    name: "Obserwuj nas",
    url: "#obserwuj-nas",
  },
  {
    name: "Dołącz do nas",
    url: "#dolacz-do-nas",
  },
  {
    name: "Partnerzy",
    url: "#partnerzy",
  },
];

export default function Navigation() {
  const [active, setActive] = useState(undefined);
  const [solidNavbar, setSolidNavbar] = useState(false);

  const checkboxRef = useRef();

  function deselectNavigation() {
    if (checkboxRef?.current) {
      checkboxRef.current.checked = false;
    }
  }

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const { id } = entry.target;
          setActive(id);
        });
      },
      {
        rootMargin: "-600px 0px -200px 0px",
      }
    );
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      sections.forEach((section) => sectionObserver.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setSolidNavbar(window.scrollY > 100);
    }, 200);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={classnames(styles.container, {
        [styles.container__solid]: solidNavbar,
      })}
    >
      <div className={styles.logo}>
        <a href="#">
          <Image src="/img/logo.svg" alt="logo" width={40} height={40} />
        </a>
      </div>
      <input
        ref={checkboxRef}
        id="nav-toggle"
        type="checkbox"
        className={styles.hamburger}
      />
      <div className={styles.linksWrapper}>
        <ul className={styles.links}>
          {sections.map(({ name, url }) => (
            <li key={url}>
              <a
                href={url}
                className={classnames(styles.link, {
                  [styles.link__active]: url === `#${active}`,
                })}
                onClick={deselectNavigation}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <label htmlFor="nav-toggle" className={styles.hamburgerTrigger}>
        <span></span>
      </label>
    </nav>
  );
}
