import { getTranslations } from "next-intl/server";
import { footerResourceLinks } from "@/data/footer-links";
import { navLinks } from "@/data/navigation";
import { Link } from "@/i18n/navigation";
import { focusRing } from "@/lib/styles";

export default async function Footer() {
  const t = await getTranslations();

  const siteLinks = navLinks.filter((link) => !link.cta);

  return (
    <footer className="bg-forest-deep pt-16 pb-8 text-white">
      <div className="mx-auto max-w-[1180px] px-8 max-[480px]:px-5">
        <div className="grid grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-10 border-b border-line-dark pb-12 max-[720px]:grid-cols-2 max-[480px]:grid-cols-1 max-[480px]:gap-9">
          <div>
            <span className="flex items-center gap-3">
              <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-sage font-serif text-[12px] font-bold text-sage">
                OJ
              </span>
              <span className="text-[14px] tracking-wide">
                <b className="font-semibold">Omwata</b> John Charles
              </span>
            </span>
            <p className="mt-4 max-w-[260px] text-[13.5px] leading-relaxed text-sage-light/70">
              {t("footer.tagline")}
            </p>
          </div>

          <nav aria-label={t("footer.siteHeading")}>
            <p className="mb-4 font-mono text-[11.5px] tracking-wide text-sage-light/50 uppercase">
              {t("footer.siteHeading")}
            </p>
            <ul className="space-y-2.5">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-[13.5px] text-sage-light transition-colors hover:text-white ${focusRing}`}
                  >
                    {t(`common.${link.id}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t("footer.legalHeading")}>
            <p className="mb-4 font-mono text-[11.5px] tracking-wide text-sage-light/50 uppercase">
              {t("footer.legalHeading")}
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/impressum"
                  className={`text-[13.5px] text-sage-light transition-colors hover:text-white ${focusRing}`}
                >
                  {t("legal.impressum.navLabel")}
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className={`text-[13.5px] text-sage-light transition-colors hover:text-white ${focusRing}`}
                >
                  {t("legal.datenschutz.navLabel")}
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label={t("footer.resourcesHeading")}>
            <p className="mb-4 font-mono text-[11.5px] tracking-wide text-sage-light/50 uppercase">
              {t("footer.resourcesHeading")}
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {footerResourceLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-[13.5px] text-sage-light transition-colors hover:text-white ${focusRing}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="pt-8 font-mono text-[12.5px] text-sage-light/60">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
