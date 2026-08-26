"use client";

import { useEffect, useState } from "react";
import { deploySteps, deployTagline } from "@/data/deploy-steps";

type Line = {
  command: string;
  result: string;
  typed: boolean;
};

const TYPE_DELAY = 620;
const LINE_PAUSE = 420;

export default function DeployTerminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timeouts.push(setTimeout(resolve, ms));
      });

    const run = async () => {
      await wait(0);
      if (cancelled) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        setLines(deploySteps.map((step) => ({ ...step, typed: true })));
        setShowTagline(true);
        return;
      }

      for (let i = 0; i < deploySteps.length; i++) {
        if (cancelled) return;
        setLines((prev) => [...prev, { ...deploySteps[i], typed: false }]);
        await wait(TYPE_DELAY);
        if (cancelled) return;
        setLines((prev) =>
          prev.map((line, idx) => (idx === i ? { ...line, typed: true } : line)),
        );
        await wait(LINE_PAUSE);
      }
      if (!cancelled) setShowTagline(true);
    };

    run();

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="w-full max-w-[520px] overflow-hidden rounded-[10px] border border-white/10 bg-[#0a1712] shadow-[0_30px_70px_rgba(0,0,0,0.4)]"
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="h-[9px] w-[9px] rounded-full bg-white/25" />
        <span className="h-[9px] w-[9px] rounded-full bg-white/25" />
        <span className="h-[9px] w-[9px] rounded-full bg-white/25" />
        <span className="ml-2 font-mono text-[12px] text-white/40">
          deploy — your-new-site
        </span>
      </div>
      <div className="min-h-[240px] px-5 py-5 font-mono text-[13px] leading-[1.9] text-sage-light">
        {lines.map((line, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className="text-sage">$</span>
            <span>{line.command}</span>
            {line.typed ? (
              <span className="ml-auto shrink-0 text-sage">✓ {line.result}</span>
            ) : (
              <span className="ml-1 inline-block h-[14px] w-[7px] shrink-0 animate-pulse bg-sage-light/70" />
            )}
          </div>
        ))}
        {showTagline && (
          <p className="mt-4 border-t border-white/10 pt-4 text-[12.5px] leading-relaxed text-white/70">
            {deployTagline.prefix}
            <span className="text-sage">{deployTagline.highlight}</span>
            {deployTagline.suffix}
          </p>
        )}
      </div>
    </div>
  );
}
