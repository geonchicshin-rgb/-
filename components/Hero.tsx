"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

/**
 * 스토리 1장 — "표면".
 * 스크롤하면 화면 전체가 확대되며 포털(문) 안으로 들어가는 연출.
 */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 입장 애니메이션
      gsap.fromTo(
        "[data-hero-line]",
        { yPercent: 110 },
        { yPercent: 0, duration: 1.2, ease: "power4.out", stagger: 0.12, delay: 0.2 }
      );
      gsap.fromTo(
        "[data-hero-fade]",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.15, delay: 0.9 }
      );

      // 스크롤: 안으로 들어가는 줌인
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          scrub: 0.6,
          pin: true,
        },
      });

      tl.to("[data-hero-inner]", {
        scale: 2.4,
        opacity: 0,
        ease: "power2.in",
      })
        .to(
          "[data-hero-ring]",
          { scale: 14, opacity: 0, ease: "power2.in" },
          "<"
        )
        .to("[data-hero-cue]", { opacity: 0, duration: 0.2 }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* 포털 링 — 이 안으로 들어간다 */}
      <div
        data-hero-ring
        className="pointer-events-none absolute h-[130vmin] w-[130vmin] rounded-full border border-line"
        aria-hidden
      />
      <div
        data-hero-ring
        className="pointer-events-none absolute h-[90vmin] w-[90vmin] rounded-full border border-line"
        aria-hidden
      />
      <div
        data-hero-ring
        className="pointer-events-none absolute h-[55vmin] w-[55vmin] rounded-full border border-accent/20"
        aria-hidden
      />

      <div data-hero-inner className="relative z-10 px-6 text-center">
        <p
          data-hero-fade
          className="mb-6 text-xs font-medium tracking-[0.35em] text-accent"
        >
          {profile.nameEn} · {profile.role.toUpperCase()}
        </p>

        <h1 className="text-[clamp(2.4rem,8vw,6.5rem)] font-extrabold leading-[1.08] tracking-tight">
          {profile.heroLines.map((line) => (
            <span key={line} className="block overflow-hidden">
              <span data-hero-line className="block">
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p
          data-hero-fade
          className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-fg-dim md:text-base"
        >
          {profile.heroSub}
        </p>
      </div>

      {/* 스크롤 유도 */}
      <div
        data-hero-cue
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[11px] tracking-[0.25em] text-fg-dim">
          {profile.scrollCue}
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-line p-1.5">
          <span className="scroll-cue-dot h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      </div>
    </section>
  );
}
