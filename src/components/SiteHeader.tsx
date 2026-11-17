import { ShoppingCart } from "lucide-react";
import { siInstagram, siWhatsapp } from "simple-icons";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/astrolina-logo.webp";
import { CONTACT, NAV_ITEMS } from "../site";
import BrandIcon from "./BrandIcon";
import LanguageSelector from "./LanguageSelector";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  return (
    <header>
      <div className={styles.topbar}>
        <div className={styles.group}>
          <a
            href={CONTACT.instagram.url}
            className={styles.contact}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BrandIcon icon={siInstagram} className={styles.icon} />
            {CONTACT.instagram.handle}
          </a>
          <a
            href={CONTACT.phone.whatsappUrl}
            className={styles.contact}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BrandIcon icon={siWhatsapp} className={styles.icon} />
            {CONTACT.phone.display}
          </a>
        </div>
        <div className={styles.group}>
          <LanguageSelector />
          <NavLink
            to="/carrito"
            aria-label="Carrito"
            className={({ isActive }) =>
              isActive ? `${styles.contact} ${styles.active}` : styles.contact
            }
          >
            <ShoppingCart className={styles.cart} aria-hidden="true" />
          </NavLink>
        </div>
      </div>

      <div className={styles.main}>
        <Link to="/" className={styles.brand}>
          <img src={logo} alt="" className={styles.logo} width={240} height={179} />
          <span>
            Jorgelina <span className={styles.accent}>· Astrolina</span>
          </span>
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
      </div>
    </header>
  );
}
