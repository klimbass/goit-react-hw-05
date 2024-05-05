import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

export default function Navigation() {
  const classList = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={classList}>
        Home
      </NavLink>
      <NavLink to="/movies" className={classList}>
        Movies
      </NavLink>
    </nav>
  );
}
