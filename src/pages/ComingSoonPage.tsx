import { pageTitle } from "../site";
import page from "./Page.module.css";

export default function ComingSoonPage({ title }: { title: string }) {
  return (
    <section className={page.page}>
      <title>{pageTitle(title)}</title>
      <p className={page.eyebrow}>{title}</p>
      <h1 className={page.title}>
        <em>Próximamente</em>
      </h1>
    </section>
  );
}
