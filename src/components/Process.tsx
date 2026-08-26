import { processSteps } from "@/data/process";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section id="process" className="bg-forest-deep py-[100px] text-white max-[720px]:py-[70px]">
      <div className="mx-auto max-w-[1180px] px-8 max-[480px]:px-5">
        <SectionHeading
          variant="dark"
          eyebrow="How a Project Runs"
          title="Four steps. No handoffs, no lost context."
          description="One person owns the whole build — so nothing gets lost between the design file and the live site."
        />

        <ol className="mt-14 max-w-[640px]">
          {processSteps.map((step, index) => (
            <li key={step.number} className="relative flex gap-6 pb-12 last:pb-0">
              {index !== processSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-[42px] left-[21px] h-[calc(100%-24px)] w-px bg-line-dark"
                />
              )}
              <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-sage font-serif text-[14px] font-semibold text-sage">
                {step.number}
              </span>
              <div className="pt-2">
                <h3 className="font-serif text-[19px] font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-sage-light/80">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
