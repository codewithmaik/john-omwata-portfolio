import { services } from "@/data/services";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="bg-cream py-[100px] max-[720px]:py-[70px]">
      <div className="mx-auto max-w-[1180px] px-8 max-[480px]:px-5">
        <SectionHeading
          eyebrow="What I Build"
          title="One website type, done properly — not ten things done half-way."
          description="I focus on custom websites, not apps or software products. That means every project gets full attention on design, speed, and how it reads on a phone."
        />

        <div className="mt-14 grid grid-cols-3 border-t border-l border-line max-[920px]:grid-cols-2 max-[720px]:grid-cols-1">
          {services.map((service) => (
            <div key={service.number} className="border-r border-b border-line bg-paper p-8">
              <span className="font-mono text-[13px] text-sage">{service.number}</span>
              <h3 className="mt-4 font-serif text-[19px] font-semibold text-forest">
                {service.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
