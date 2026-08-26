import { getTranslations } from "next-intl/server";
import { focusRing } from "@/lib/styles";

const footerLinks = [
  { id: "work", href: "#work" },
  { id: "services", href: "#services" },
  { id: "contact", href: "#contact" },
] as const;

export default async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="bg-forest-deep py-10 text-white">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-8 max-[480px]:px-5">
        <p className="font-mono text-[12.5px] text-sage-light/60">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </p>
        <nav className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] text-sage-light transition-colors hover:text-white ${focusRing}`}
            >
              {t(`common.${link.id}`)}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
