import { getTranslations } from "next-intl/server";
import { processSteps } from "@/data/process";
import ProcessVideoFrame from "./ProcessVideoFrame";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default async function Process() {
  const t = await getTranslations("process");

  return (
    <section id="process" className="bg-forest-deep py-[100px] text-white max-[720px]:py-[70px]">
      <div className="mx-auto max-w-[1180px] px-8 max-[480px]:px-5">
        <Reveal>
          <SectionHeading
            variant="dark"
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-[1fr_420px] items-start gap-16 max-[920px]:grid-cols-1 max-[920px]:gap-10">
          <ol className="max-w-[640px]">
            {processSteps.map((step, index) => (
              <li key={step.id} className="relative pb-12 last:pb-0">
                {index !== processSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-[42px] left-[21px] h-[calc(100%-24px)] w-px bg-line-dark"
                  />
                )}
                <Reveal delay={index * 80} className="flex gap-6">
                  <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-sage font-serif text-[14px] font-semibold text-sage">
                    {step.number}
                  </span>
                  <div className="pt-2">
                    <h3 className="font-serif text-[19px] font-semibold text-white">
                      {t(`steps.${step.id}.title`)}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-sage-light/80">
                      {t(`steps.${step.id}.description`)}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal
            delay={processSteps.length * 80}
            className="justify-self-end max-[920px]:justify-self-start"
          >
            <ProcessVideoFrame />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
