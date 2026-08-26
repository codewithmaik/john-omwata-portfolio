import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  variant?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  variant = "light",
}: SectionHeadingProps) {
  const isDark = variant === "dark";

  return (
    <div className="max-w-[640px]">
      <p className="mb-4 font-mono text-[12.5px] tracking-[0.08em] text-sage uppercase">
        {eyebrow}
      </p>
      <h2
        className={`font-serif text-[clamp(26px,3vw,36px)] leading-[1.2] font-semibold ${
          isDark ? "text-white" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-[16px] leading-relaxed ${
            isDark ? "text-sage-light/80" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
