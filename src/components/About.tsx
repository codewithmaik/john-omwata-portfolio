import Image from "next/image";
import { aboutFacts } from "@/data/about";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-cream py-[100px] max-[720px]:py-[70px]">
      <div className="mx-auto max-w-[1180px] px-8 max-[480px]:px-5">
        <div className="grid grid-cols-[300px_1fr] gap-16 max-[920px]:grid-cols-1 max-[920px]:gap-10">
          <div className="relative mx-auto w-full max-w-[300px] max-[920px]:max-w-[260px]">
            <div
              aria-hidden="true"
              className="absolute -right-4 -bottom-4 h-full w-full rounded-sm border border-sage"
            />
            <div className="relative aspect-[1/1.05] overflow-hidden rounded-sm">
              <Image
                src="/images/john-omwata.jpg"
                alt="Omwata John Charles"
                fill
                sizes="(max-width: 920px) 260px, 300px"
                className="object-cover grayscale-[15%]"
              />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="About"
              title="Based in Kampala. Working with clients everywhere."
            />

            <p className="mt-6 max-w-[560px] text-[16px] leading-relaxed text-ink-soft">
              I&apos;m a self-taught web developer with three years of
              hands-on experience building sites for real clients — from an
              NGO impact dashboard to restaurant and consultant websites
              launched from scratch.
            </p>
            <p className="mt-5 max-w-[560px] text-[16px] leading-relaxed text-ink-soft">
              I use AI tools the way a good carpenter uses power tools: to
              work faster, not to skip the craftsmanship. Every site is still
              designed, tested, and reviewed line by line before it goes
              live.
            </p>

            <div className="mt-10 flex flex-wrap gap-10 border-t border-line pt-8">
              {aboutFacts.map((fact) => (
                <div key={fact.label}>
                  <div className="font-mono text-[11.5px] tracking-wide text-sage uppercase">
                    {fact.label}
                  </div>
                  <div className="mt-1.5 text-[15px] font-medium text-forest">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
