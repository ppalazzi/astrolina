import { Link } from "react-router-dom";
import { pageTitle } from "../site";
import page from "./Page.module.css";

export default function NotFoundPage() {
  return (
    <section className={page.page}>
      <title>{pageTitle("Página no encontrada")}</title>
      <p className={page.eyebrow}>Error 404</p>
      <h1 className={page.title}>
        Esta página se perdió en el <em>cielo</em>
      </h1>
      <Link to="/" className={page.backLink}>
        Volver al inicio
      </Link>
    </section>
  );
}
