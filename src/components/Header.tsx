"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 text-white"
        >
          <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border border-sage font-serif text-[13px] font-bold text-sage">
            OJ
          </span>
          <span className="text-[14.5px] tracking-wide">
            <b className="font-semibold">Omwata</b> John Charles
          </span>
        </a>

        <nav
          className={`flex items-center gap-8 max-[720px]:fixed max-[720px]:inset-y-0 max-[720px]:right-0 max-[720px]:z-50 max-[720px]:w-[78vw] max-[720px]:max-w-[320px] max-[720px]:flex-col max-[720px]:items-start max-[720px]:justify-center max-[720px]:gap-6 max-[720px]:bg-forest-deep max-[720px]:px-10 max-[720px]:shadow-[-20px_0_40px_rgba(0,0,0,0.25)] max-[720px]:transition-transform max-[720px]:duration-300 ${
            open ? "max-[720px]:translate-x-0" : "max-[720px]:translate-x-full"
          }`}
        >
          {navLinks.map((link) =>
            link.cta ? (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-[3px] bg-sage px-[18px] py-[9px] text-[13px] font-semibold tracking-wide text-forest-deep transition-colors hover:bg-[#93b884]"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group relative text-[13.5px] tracking-wide text-sage-light transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-[5px] left-0 h-px w-0 bg-sage transition-all duration-[250ms] group-hover:w-full" />
              </a>
            ),
          )}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="hidden flex-col justify-center gap-[5px] max-[720px]:flex"
        >
          <span className="block h-[1.5px] w-[22px] bg-white" />
          <span className="block h-[1.5px] w-[22px] bg-white" />
          <span className="block h-[1.5px] w-[22px] bg-white" />
        </button>
      </div>
    </header>
  );
}
