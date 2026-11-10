import styles from "./SiteHeader.module.css";

const NAV_ITEMS = [
  { label: "Quién soy", href: "#quien-soy" },
  { label: "Salidas", href: "#salidas" },
  { label: "Talleres", href: "#talleres" },
  { label: "La Tribu", href: "#la-tribu" },
  { label: "Divulgación", href: "#divulgacion" },
  { label: "Libros", href: "#libros" },
  { label: "Contacto", href: "#contacto" },
];

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.brand}>
        Jorgelina <span className={styles.accent}>· Astrolina</span>
      </a>
      <nav aria-label="Principal">
        <ul className={styles.menu}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={styles.link}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
