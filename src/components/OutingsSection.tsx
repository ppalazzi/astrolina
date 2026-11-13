import flyer from "../assets/alto-jague-folleto.jpg";
import section from "./Section.module.css";
import styles from "./OutingsSection.module.css";

export default function OutingsSection() {
  return (
    <section id="salidas" className={section.section}>
      <p className={section.eyebrow}>Salidas</p>
      <h2 className={section.title}>
        1º Expedición <em>Alto Jagüé</em>
      </h2>
      <p className={styles.meta}>7 al 12 de octubre de 2026 · La Rioja</p>

      <img
        className={styles.flyer}
        src={flyer}
        alt="Folleto de la 1º Expedición Alto Jagüé, del 7 al 12 de octubre de 2026 en La Rioja: instrucción personalizada en observación y registro del cielo, salidas diurnas y nocturnas, observación guiada y pensión completa en el hospedaje rural Los Mudaderos."
        width={1080}
        height={1080}
        loading="lazy"
      />
    </section>
  );
}
