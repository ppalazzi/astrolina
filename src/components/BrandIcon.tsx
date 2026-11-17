import type { SimpleIcon } from "simple-icons";

type Props = {
  icon: SimpleIcon;
  className?: string;
};

// Ícono de marca de simple-icons; toma el color del texto (currentColor).
export default function BrandIcon({ icon, className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
