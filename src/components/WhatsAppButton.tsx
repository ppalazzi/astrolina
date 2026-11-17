import { siWhatsapp } from "simple-icons";
import { CONTACT } from "../site";
import BrandIcon from "./BrandIcon";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT.phone.whatsappUrl}
      className={styles.button}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
    >
      <BrandIcon icon={siWhatsapp} />
    </a>
  );
}
