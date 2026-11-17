import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./LanguageSelector.module.css";

// Por ahora el sitio está solo en español; inglés queda anunciado.
const LANGUAGES = [
  { code: "es", label: "Español", available: true },
  { code: "en", label: "English", available: false },
];

function ArgentinaFlag() {
  return (
    <svg className={styles.flag} viewBox="0 0 9 6" aria-hidden="true">
      <rect width="9" height="6" fill="#74acdf" />
      <rect y="2" width="9" height="2" fill="#fff" />
      <circle cx="4.5" cy="3" r="0.6" fill="#f6b40e" />
    </svg>
  );
}

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className={styles.selector}>
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Idioma: Español"
        onClick={() => setOpen((value) => !value)}
      >
        <ArgentinaFlag />
        Español
        <ChevronDown className={styles.chevron} aria-hidden="true" />
      </button>
      {open && (
        <ul className={styles.menu}>
          {LANGUAGES.map((language) => (
            <li
              key={language.code}
              lang={language.code}
              className={language.available ? styles.option : styles.disabled}
              aria-current={language.code === "es" ? "true" : undefined}
            >
              {language.label}
              {language.code === "es" && <Check className={styles.check} aria-hidden="true" />}
              {!language.available && <span className={styles.soon}>pronto</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
