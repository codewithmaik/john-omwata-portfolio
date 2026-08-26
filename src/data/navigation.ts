export type NavLink = {
  id: "work" | "services" | "process" | "about" | "startProject";
  href: string;
  cta?: boolean;
};

export const navLinks: NavLink[] = [
  { id: "work", href: "#work" },
  { id: "services", href: "#services" },
  { id: "process", href: "#process" },
  { id: "about", href: "#about" },
  { id: "startProject", href: "#contact", cta: true },
];
