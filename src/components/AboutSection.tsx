import portrait from "../assets/jorgelina-camara.jpg";
import styles from "./AboutSection.module.css";

// Texto: presentación de Jorgelina en docs/1º EXPEDICIÓN OCTUBRE EN alto jague (1).pdf
export default function AboutSection() {
  return (
    <section id="quien-soy" className={styles.section}>
      <p className={styles.eyebrow}>Quién soy</p>
      <h2 className={styles.title}>
        Hola, soy <em>Jorgelina Alvarez</em>
      </h2>

      <div className={styles.layout}>
        <div className={styles.body}>
          <p>
            Mi pasión por la fotografía surgió a raíz de contemplar con mucho
            amor y conexión el cielo tanto de día como de noche desde que tengo
            uso de razón. Siempre fui curiosa por comprenderlo, por eso me
            dediqué a la ciencia (meteorología) durante bastante tiempo, pero
            sentía que me faltaba algo y fue tanto que quise ir más allá y
            comencé a capturar todo eso que me encantaba. Fui paso a paso
            conociendo las técnicas y poniéndolas en práctica en cada viaje que
            realizaba.
          </p>
          <p>
            En un viaje como Expedicionaria de la Antártida mi vida dio un giro
            al ser reconocida en todo el mundo como la pionera de la
            Astrofotografía por esas latitudes, así que decidí dedicarme a
            profundizar más en esta clase de fotografías y en poder comunicar de
            forma simple pero concisa el cómo hacerlo.
          </p>
          <p>
            Aprendí mucho por mi cuenta, a través de muchas horas de práctica y
            sumergiéndome en todo lo que sumaría para poder estar en cualquier
            parte del mundo aplicando esta nueva pero notable forma de
            expresión.
          </p>
          <blockquote className={styles.quote}>
            La naturaleza es el actor principal y la fotografía un medio.
          </blockquote>
        </div>

        <figure className={styles.frame}>
          <img
            src={portrait}
            alt="Jorgelina Alvarez mirando el horizonte junto a su cámara con teleobjetivo, en un paisaje helado"
            width={442}
            height={295}
          />
        </figure>
      </div>
    </section>
  );
}
