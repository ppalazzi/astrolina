import flyer from "../assets/alto-jague-folleto.jpg";
import { pageTitle } from "../site";
import styles from "./OutingsPage.module.css";
import page from "./Page.module.css";

export default function OutingsPage() {
  return (
    <section className={page.page}>
      <title>{pageTitle("Salidas")}</title>
      <p className={page.eyebrow}>Salidas</p>
      <h1 className={page.title}>
        1º Expedición <em>Alto Jagüé</em>
      </h1>
      <p className={styles.meta}>7 al 12 de octubre de 2026 · La Rioja</p>

      <img
        className={styles.flyer}
        src={flyer}
        alt="Folleto de la 1º Expedición Alto Jagüé, del 7 al 12 de octubre de 2026 en La Rioja: instrucción personalizada en observación y registro del cielo, salidas diurnas y nocturnas, observación guiada y pensión completa en el hospedaje rural Los Mudaderos."
        width={1080}
        height={1080}
      />
    </section>
  );
}
