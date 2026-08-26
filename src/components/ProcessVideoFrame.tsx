"use client";

import { useEffect, useRef } from "react";

export default function ProcessVideoFrame() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play().catch(() => {});
          observer.unobserve(container);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[420px] overflow-hidden rounded-[10px] border border-white/10 bg-[#0a1712] shadow-[0_30px_70px_rgba(0,0,0,0.4)]"
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="h-[9px] w-[9px] rounded-full bg-white/25" />
        <span className="h-[9px] w-[9px] rounded-full bg-white/25" />
        <span className="h-[9px] w-[9px] rounded-full bg-white/25" />
        <span className="ml-2 font-mono text-[12px] text-white/40">
          process — build.log
        </span>
      </div>
      <video
        ref={videoRef}
        className="block w-full"
        src="/videos/process.mp4"
        poster="/videos/process-poster.jpg"
        muted
        playsInline
        loop={false}
        preload="metadata"
        aria-hidden="true"
      >
        <track kind="captions" />
      </video>
    </div>
  );
}
