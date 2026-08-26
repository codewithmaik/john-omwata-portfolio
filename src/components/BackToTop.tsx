"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { focusRing } from "@/lib/styles";

export default function BackToTop() {
  const t = useTranslations("common");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) {
        setVisible(false);
        return;
      }
      setVisible(window.scrollY / scrollable > 0.5);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t("backToTop")}
      tabIndex={visible ? 0 : -1}
      className={`fixed right-6 bottom-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-sage bg-forest-deep text-sage shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:bg-sage hover:text-forest-deep max-[480px]:right-4 max-[480px]:bottom-4 ${focusRing} ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 13V3" />
        <path d="M3.5 7.5L8 3l4.5 4.5" />
      </svg>
    </button>
  );
}
