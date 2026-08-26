export type NavLink = {
  label: string;
  href: string;
  cta?: boolean;
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Start a project", href: "#contact", cta: true },
];
