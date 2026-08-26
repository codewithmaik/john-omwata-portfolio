import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { caseStudies } from "@/data/case-studies/vd-handwerk";
import { focusRing } from "@/lib/styles";
import { Link } from "@/i18n/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import WorkThumbnail from "@/components/WorkThumbnail";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();

  const t = await getTranslations("caseStudy.vdHandwerk");

  return (
    <>
      <Header />
      <main>
      <section className="relative overflow-hidden bg-forest-deep pt-[168px] pb-[90px] text-white max-[720px]:pt-[130px] max-[720px]:pb-[70px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 900px 500px at 82% -10%, rgba(127,166,114,0.16), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1180px] px-8 max-[480px]:px-5">
          <Reveal>
            <Link
              href="/#work"
              className={`inline-block font-mono text-[13px] text-sage-light transition-colors hover:text-white ${focusRing}`}
            >
              {t("backLink")}
            </Link>

            <div className="mt-8 flex items-center gap-4">
              <WorkThumbnail name={t("name")} seed={1} />
              <p className="font-mono text-[12.5px] tracking-[0.08em] text-sage-light uppercase">
                {t("eyebrow")}
              </p>
            </div>

            <h1 className="mt-4 font-serif text-[clamp(30px,4vw,48px)] leading-[1.15] font-semibold">
              {t("name")}
            </h1>
            <p className="mt-3 max-w-[560px] text-[17px] leading-relaxed text-sage-light/90">
              {t("tagline")}
            </p>
            <p className="mt-5 font-mono text-[13px] text-sage-light/70">
              {t("metaArea")}
            </p>

            <a
              href={study.href}
              target="_blank"
              rel="noopener"
              className={`mt-8 inline-block rounded-[3px] bg-sage px-7 py-3.5 text-[14px] font-semibold text-forest-deep transition-colors hover:bg-[#93b884] ${focusRing}`}
            >
              {t("ctaLiveSite")}
            </a>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-[100px] max-[720px]:py-[70px]">
        <div className="mx-auto max-w-[1180px] px-8 max-[480px]:px-5">
          <Reveal>
            <SectionHeading
              eyebrow={t("services.eyebrow")}
              title={t("services.title")}
              description={t("services.description")}
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-3 border-t border-l border-line max-[920px]:grid-cols-2 max-[720px]:grid-cols-1">
            {study.serviceIds.map((id, index) => (
              <Reveal key={id} delay={index * 60}>
                <div className="h-full border-r border-b border-line bg-paper p-8">
                  <h3 className="font-serif text-[19px] font-semibold text-forest">
                    {t(`services.items.${id}.title`)}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    {t(`services.items.${id}.description`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-deep py-[100px] text-white max-[720px]:py-[70px]">
        <div className="mx-auto max-w-[1180px] px-8 max-[480px]:px-5">
          <Reveal>
            <SectionHeading
              variant="dark"
              eyebrow={t("about.eyebrow")}
              title={t("about.title")}
            />
            <p className="mt-6 max-w-[640px] text-[16px] leading-relaxed text-sage-light/80">
              {t("about.paragraph")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-[100px] max-[720px]:py-[70px]">
        <div className="mx-auto max-w-[1180px] px-8 max-[480px]:px-5">
          <Reveal>
            <SectionHeading eyebrow={t("process.eyebrow")} title={t("process.title")} />
          </Reveal>

          <ol className="mt-14 max-w-[640px]">
            {study.processIds.map((id, index) => (
              <li key={id} className="relative pb-12 last:pb-0">
                {index !== study.processIds.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-[42px] left-[21px] h-[calc(100%-24px)] w-px bg-line"
                  />
                )}
                <Reveal delay={index * 80} className="flex gap-6">
                  <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-sage font-serif text-[14px] font-semibold text-sage">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-2">
                    <h3 className="font-serif text-[19px] font-semibold text-forest">
                      {t(`process.steps.${id}.title`)}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                      {t(`process.steps.${id}.description`)}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper py-[100px] max-[720px]:py-[70px]">
        <div className="mx-auto max-w-[1180px] px-8 max-[480px]:px-5">
          <Reveal>
            <SectionHeading eyebrow={t("gallery.eyebrow")} title={t("gallery.title")} />
            <p className="mt-4 max-w-[520px] text-[15px] text-ink-soft">{t("gallery.note")}</p>
          </Reveal>

          <div className="mt-10 grid grid-cols-4 gap-4 max-[920px]:grid-cols-2 max-[480px]:grid-cols-1">
            {Array.from({ length: study.galleryTiles }).map((_, index) => (
              <Reveal
                key={index}
                delay={index * 60}
                className="flex aspect-square items-center justify-center rounded-[6px] bg-gradient-to-br from-forest-mid to-sage"
              >
                <span className="sr-only">{t("gallery.placeholderAlt")}</span>
                <span aria-hidden="true" className="font-mono text-[12px] text-white/70">
                  {index + 1}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-[100px] max-[720px]:py-[70px]">
        <div className="mx-auto max-w-[1180px] px-8 max-[480px]:px-5">
          <Reveal>
            <SectionHeading eyebrow={t("faq.eyebrow")} title={t("faq.title")} />
          </Reveal>

          <div className="mt-10 max-w-[720px] divide-y divide-line border-y border-line">
            {study.faqIds.map((id, index) => (
              <Reveal key={id} delay={index * 60} className="py-6">
                <h3 className="font-serif text-[17px] font-semibold text-forest">
                  {t(`faq.items.${id}.question`)}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {t(`faq.items.${id}.answer`)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest-deep py-[100px] text-center text-white max-[720px]:py-[70px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 700px 400px at 50% 100%, rgba(127,166,114,0.14), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[640px] px-8 max-[480px]:px-5">
          <p className="mb-4 font-mono text-[12.5px] tracking-[0.08em] text-sage uppercase">
            {t("contact.eyebrow")}
          </p>
          <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] leading-[1.15] font-semibold text-white">
            {t("contact.title")}
          </h2>
          <p className="mx-auto mt-5 max-w-[480px] text-[16px] leading-relaxed text-sage-light/80">
            {t("contact.subhead")}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={study.href}
              target="_blank"
              rel="noopener"
              className={`rounded-[3px] bg-sage px-7 py-3.5 text-[14px] font-semibold text-forest-deep transition-colors hover:bg-[#93b884] ${focusRing}`}
            >
              {t("contact.ctaLive")}
            </a>
            <Link
              href="/#work"
              className={`rounded-[3px] border border-white/25 px-7 py-3.5 text-[14px] font-semibold text-white transition-colors hover:border-white/50 ${focusRing}`}
            >
              {t("contact.ctaBack")}
            </Link>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
