import { getTranslations } from "next-intl/server";
import { stackItems } from "@/data/stack";
import Reveal from "./Reveal";

export default async function Stack() {
  const t = await getTranslations("stack");
  const [headingLine1, headingLine2] = t("heading").split("\n");

  return (
    <section className="bg-cream py-[100px] max-[720px]:py-[70px]">
      <div className="mx-auto max-w-[1180px] px-8 max-[480px]:px-5">
        <div className="grid grid-cols-[280px_1fr] gap-12 max-[920px]:grid-cols-1">
          <Reveal>
            <h2 className="font-serif text-[clamp(26px,3vw,36px)] leading-[1.2] font-semibold text-forest">
              {headingLine1}
              <br />
              {headingLine2}
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <ul className="flex flex-wrap content-start gap-3">
              {stackItems.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-paper px-4 py-2 font-mono text-[13px] text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
