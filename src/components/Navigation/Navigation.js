import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>

    <NavLink
      to="/phonebook"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Phonebook
    </NavLink>
  </nav>
);

export default Navigation;
