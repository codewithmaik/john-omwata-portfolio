import { workItems } from "@/data/work";
import { focusRing } from "@/lib/styles";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Work() {
  return (
    <section id="work" className="bg-cream py-[100px] max-[720px]:py-[70px]">
      <div className="mx-auto max-w-[1180px] px-8 max-[480px]:px-5">
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="A few sites built recently."
            description="Client work and self-directed practice pieces, spanning hospitality, architecture, and energy consulting."
          />
        </Reveal>

        <div className="mt-14 border-t border-line">
          {workItems.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 80}
              className="grid grid-cols-[80px_1fr_auto] items-start gap-8 border-b border-line py-9 max-[720px]:grid-cols-1 max-[720px]:gap-4"
            >
              <div className="font-mono text-[13px] text-ink-soft">{item.year}</div>

              <div>
                <div className="font-mono text-[12px] tracking-wide text-sage uppercase">
                  {item.role}
                </div>
                <h3 className="mt-2 font-serif text-[22px] font-semibold text-forest">
                  {item.name}
                </h3>
                <p className="mt-3 max-w-[560px] text-[15px] leading-relaxed text-ink-soft">
                  {item.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11.5px] text-ink-soft"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                  className={`w-fit shrink-0 rounded-[3px] bg-sage-light px-4 py-2 font-mono text-[13px] font-medium text-forest-deep transition-colors hover:bg-sage ${focusRing}`}
                >
                  View live site ↗
                </a>
              ) : (
                <span className="w-fit shrink-0 cursor-default font-mono text-[13px] text-ink-soft/60">
                  Live site coming soon
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
