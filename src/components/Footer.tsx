import { focusRing } from "@/lib/styles";

const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-deep py-10 text-white">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-8 max-[480px]:px-5">
        <p className="font-mono text-[12.5px] text-sage-light/60">
          © 2026 Omwata John Charles. Built and deployed by me.
        </p>
        <nav className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] text-sage-light transition-colors hover:text-white ${focusRing}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
