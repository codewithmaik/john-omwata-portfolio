import { getTranslations } from "next-intl/server";
import { contactInfo, contactMeta } from "@/data/contact";
import { focusRing } from "@/lib/styles";

export default async function Contact() {
  const t = await getTranslations("contact");

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-forest-deep py-[100px] text-center text-white max-[720px]:py-[70px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 700px 400px at 50% 100%, rgba(127,166,114,0.14), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[720px] px-8 max-[480px]:px-5">
        <p className="mb-4 font-mono text-[12.5px] tracking-[0.08em] text-sage uppercase">
          {t("eyebrow")}
        </p>
        <h2 className="font-serif text-[clamp(28px,4vw,42px)] leading-[1.15] font-semibold text-white">
          {t("title")}
        </h2>
        <p className="mx-auto mt-5 max-w-[480px] text-[16px] leading-relaxed text-sage-light/80">
          {t("subhead")}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${contactInfo.email}?subject=Website%20project%20enquiry`}
            className={`rounded-[3px] bg-sage px-7 py-3.5 text-[14px] font-semibold text-forest-deep transition-colors hover:bg-[#93b884] ${focusRing}`}
          >
            {t("emailCta")}
          </a>
          <a
            href={contactInfo.phoneHref}
            className={`rounded-[3px] border border-white/25 px-7 py-3.5 text-[14px] font-semibold text-white transition-colors hover:border-white/50 ${focusRing}`}
          >
            {t("callCta")}
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 border-t border-line-dark pt-8 max-[720px]:flex-col">
          {contactMeta.map((item) => (
            <div key={item.id}>
              <div className="font-mono text-[11.5px] tracking-wide text-sage-light/60 uppercase">
                {t(`metaLabels.${item.id}`)}
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  className={`mt-1.5 block text-[15px] font-medium text-sage-light transition-colors hover:text-white ${focusRing}`}
                >
                  {item.value}
                </a>
              ) : (
                <div className="mt-1.5 text-[15px] font-medium text-sage-light">
                  {item.value}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-6 font-mono text-[13px] text-sage-light/60">{t("specialization")}</p>
      </div>
    </section>
  );
}
