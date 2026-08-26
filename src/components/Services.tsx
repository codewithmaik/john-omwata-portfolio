import { getTranslations } from "next-intl/server";
import { services } from "@/data/services";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default async function Services() {
  const t = await getTranslations("services");

  return (
    <section id="services" className="bg-cream py-[100px] max-[720px]:py-[70px]">
      <div className="mx-auto max-w-[1180px] px-8 max-[480px]:px-5">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-3 border-t border-l border-line max-[920px]:grid-cols-2 max-[720px]:grid-cols-1">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 60}>
              <div className="h-full border-r border-b border-line bg-paper p-8">
                <span className="font-mono text-[13px] text-sage">{service.number}</span>
                <h3 className="mt-4 font-serif text-[19px] font-semibold text-forest">
                  {t(`items.${service.id}.title`)}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {t(`items.${service.id}.description`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
