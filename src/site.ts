export const SITE_NAME = "Jorgelina · Astrolina";

// Solapas del menú; cada una es una página propia (ver App.tsx).
export const NAV_ITEMS = [
  { label: "Quién soy", path: "/quien-soy" },
  { label: "Salidas", path: "/salidas" },
  { label: "Talleres", path: "/talleres" },
  { label: "La Tribu", path: "/la-tribu" },
  { label: "Divulgación", path: "/divulgacion" },
  { label: "Libros", path: "/libros" },
  { label: "Contacto", path: "/contacto" },
];

export function pageTitle(title?: string) {
  return title ? `${title} · ${SITE_NAME}` : SITE_NAME;
}
