import { Link, NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../site";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        Jorgelina <span className={styles.accent}>· Astrolina</span>
      </Link>
      <nav aria-label="Principal">
        <ul className={styles.menu}>
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
