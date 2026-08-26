import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { focusRing } from "@/lib/styles";
import Reveal from "./Reveal";

type LegalSection = { heading: string; body: string[] };

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  backLabel: string;
};

const URL_PATTERN = /https?:\/\/[^\s]+/g;

function linkify(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = URL_PATTERN.exec(text))) {
    let url = match[0];
    let trailing = "";
    const trailingMatch = url.match(/[.,;:!?)]+$/);
    if (trailingMatch) {
      trailing = trailingMatch[0];
      url = url.slice(0, -trailing.length);
    }

    nodes.push(text.slice(lastIndex, match.index));
    nodes.push(
      <a
        key={`${keyPrefix}-${i++}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sage underline decoration-sage/40 underline-offset-2 hover:text-forest"
      >
        {url}
      </a>,
    );
    nodes.push(trailing);
    lastIndex = match.index + match[0].length;
  }

  nodes.push(text.slice(lastIndex));
  return nodes;
}

export default function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
  backLabel,
}: LegalPageProps) {
  return (
    <section className="bg-cream pt-[160px] pb-[100px] max-[720px]:pt-[130px] max-[720px]:pb-[70px]">
      <div className="mx-auto max-w-[760px] px-8 max-[480px]:px-5">
        <Reveal>
          <Link
            href="/"
            className={`font-mono text-[13px] text-sage transition-colors hover:text-forest ${focusRing}`}
          >
            {backLabel}
          </Link>

          <p className="mt-10 mb-4 font-mono text-[12.5px] tracking-[0.08em] text-sage uppercase">
            {eyebrow}
          </p>
          <h1 className="font-serif text-[clamp(30px,4vw,42px)] leading-[1.15] font-semibold text-forest">
            {title}
          </h1>
          <p className="mt-5 max-w-[600px] text-[16px] leading-relaxed text-ink-soft">
            {intro}
          </p>
        </Reveal>

        <div className="mt-12 space-y-10 border-t border-line pt-10">
          {sections.map((section, si) => (
            <Reveal key={section.heading} delay={Math.min(si * 60, 300)}>
              <h2 className="font-serif text-[19px] font-semibold text-forest">
                {section.heading}
              </h2>
              {section.body.map((paragraph, pi) => (
                <p
                  key={pi}
                  className="mt-3 text-[15px] leading-relaxed text-ink-soft"
                >
                  {linkify(paragraph, `sec-${si}-${pi}`)}
                </p>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
