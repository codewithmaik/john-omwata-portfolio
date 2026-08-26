"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { navLinks } from "@/data/navigation";
import { focusRing } from "@/lib/styles";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, type Locale } from "@/i18n/routing";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = useTranslations("common");
  const tNav = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,padding,box-shadow] duration-[350ms] ${
        scrolled
          ? "bg-forest-deep/92 py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-md"
          : "py-[22px]"
      }`}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-8 max-[480px]:px-5">
        <Link
          href="/"
          onClick={(e) => {
            setOpen(false);
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className={`group flex items-center gap-3 text-white ${focusRing}`}
        >
          <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border border-sage font-serif text-[13px] font-bold text-sage transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-sage group-hover:text-forest-deep">
            OJ
          </span>
          <span className="text-[14.5px] tracking-wide transition-colors duration-300 group-hover:text-sage-light">
            <b className="font-semibold">Omwata</b> John Charles
          </span>
        </Link>

        <nav
          className={`flex items-center gap-8 max-[720px]:fixed max-[720px]:inset-y-0 max-[720px]:right-0 max-[720px]:z-50 max-[720px]:w-[78vw] max-[720px]:max-w-[320px] max-[720px]:flex-col max-[720px]:items-start max-[720px]:justify-center max-[720px]:gap-6 max-[720px]:overflow-y-auto max-[720px]:bg-forest-deep max-[720px]:px-10 max-[720px]:py-16 max-[720px]:shadow-[-20px_0_40px_rgba(0,0,0,0.25)] max-[720px]:transition-transform max-[720px]:duration-300 ${
            open ? "max-[720px]:translate-x-0" : "max-[720px]:translate-x-full"
          }`}
        >
          {navLinks.map((link) =>
            link.cta ? (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-[3px] bg-sage px-[18px] py-[9px] text-[13px] font-semibold tracking-wide text-forest-deep transition-colors hover:bg-[#93b884] ${focusRing}`}
              >
                {t(link.id)}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`group relative text-[13.5px] tracking-wide text-sage-light transition-colors hover:text-white ${focusRing}`}
              >
                {t(link.id)}
                <span className="absolute -bottom-[5px] left-0 h-px w-0 bg-sage transition-all duration-[250ms] group-hover:w-full" />
              </a>
            ),
          )}

          <div
            role="group"
            aria-label={tNav("languageLabel")}
            className="flex items-center gap-1 border-t border-line-dark pt-6 font-mono text-[12px] tracking-wide max-[720px]:w-full max-[720px]:justify-start min-[721px]:border-t-0 min-[721px]:pt-0 min-[721px]:border-l min-[721px]:border-line-dark min-[721px]:pl-7"
          >
            {locales.map((loc) => (
              <button
                key={loc}
                type="button"
                aria-current={locale === loc ? "true" : undefined}
                onClick={() => {
                  router.replace(pathname, { locale: loc });
                  setOpen(false);
                }}
                className={`rounded-[3px] px-2 py-1 uppercase transition-colors ${focusRing} ${
                  locale === loc
                    ? "bg-sage text-forest-deep"
                    : "text-sage-light/70 hover:text-white"
                }`}
              >
                {loc}
                <span className="sr-only"> — {formatLocaleName(loc)}</span>
              </button>
            ))}
          </div>
        </nav>

        <button
          type="button"
          aria-label={tNav("toggleMenu")}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className={`hidden flex-col justify-center gap-[5px] max-[720px]:flex ${focusRing}`}
        >
          <span className="block h-[1.5px] w-[22px] bg-white" />
          <span className="block h-[1.5px] w-[22px] bg-white" />
          <span className="block h-[1.5px] w-[22px] bg-white" />
        </button>
      </div>
    </header>
  );
}

function formatLocaleName(locale: Locale) {
  return localeNames[locale];
}
