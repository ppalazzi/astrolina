import { pageTitle } from "../site";
import styles from "./HomePage.module.css";
import page from "./Page.module.css";

// Portada según el prototipo de AS-2.
export default function HomePage() {
  return (
    <section className={styles.hero}>
      <title>{pageTitle()}</title>
      <p className={page.eyebrow}>Astrofotografía · cielo · comunidad</p>
      <div className={`viewfinder ${styles.frame}`}>
        <h1 className={styles.title}>
          El mapa del <br />
          cielo que <em>compartimos</em>
        </h1>
      </div>
      <p className={styles.lead}>
        Meteoróloga y astrofotógrafa argentina. Un año en la Antártida, más de
        una década retratando la noche del sur y llevando gente a mirar el cielo
        de verdad.
      </p>
    </section>
  );
}
