import { getTranslations } from "next-intl/server";
import { trustStats } from "@/data/stats";
import { focusRing } from "@/lib/styles";
import DeployTerminal from "./DeployTerminal";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
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
        <div className="grid grid-cols-[1.05fr_0.95fr] items-center gap-16 max-[920px]:grid-cols-1 max-[920px]:gap-12">
          <div>
            <p className="mb-6 flex items-center gap-2 font-mono text-[12.5px] tracking-[0.08em] text-sage-light uppercase">
              <span className="h-[6px] w-[6px] animate-pulse rounded-full bg-sage" />
              {t("eyebrow")}
            </p>

            <h1 className="font-serif text-[clamp(34px,4.4vw,54px)] leading-[1.1] font-semibold max-[480px]:text-[30px]">
              {t.rich("headline", {
                em: (chunks) => (
                  <em className="font-medium text-sage italic">{chunks}</em>
                ),
              })}
            </h1>

            <p className="mt-6 max-w-[520px] text-[16.5px] leading-relaxed text-sage-light/90">
              {t("subhead")}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className={`rounded-[3px] bg-sage px-7 py-3.5 text-[14px] font-semibold text-forest-deep transition-colors hover:bg-[#93b884] ${focusRing}`}
              >
                {t("ctaWork")}
              </a>
              <a
                href="#contact"
                className={`rounded-[3px] border border-white/25 px-7 py-3.5 text-[14px] font-semibold text-white transition-colors hover:border-white/50 ${focusRing}`}
              >
                {t("ctaContact")}
              </a>
            </div>

            <div className="mt-14 grid grid-cols-4 gap-6 border-t border-line-dark pt-8 max-[720px]:grid-cols-2 max-[720px]:gap-y-8">
              {trustStats.map((stat) => (
                <div key={stat.id}>
                  <div className="font-serif text-[26px] font-semibold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-mono text-[11.5px] tracking-wide text-sage-light/70 uppercase">
                    {t(`stats.${stat.id}`)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <DeployTerminal />
        </div>
      </div>
    </section>
  );
}
