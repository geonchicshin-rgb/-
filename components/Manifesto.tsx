"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { manifesto } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

/**
 * 스토리 2장 — "내면".
 * sticky 섹션 방식: 각 줄이 독립적인 ScrollTrigger로 한 문장씩 밝아진다.
 * 단일 타임라인 scrub 대신 줄마다 분리된 트리거를 사용해
 * Lenis와의 충돌 없이 안정적으로 동작한다.
 */

const VH_PER_LINE = 65; // 한 문장당 스크롤 거리 (vh)

export default function Manifesto() {
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>("[data-manifesto-line]");
      const section = outerRef.current;
      if (!lines.length || !section) return;

      // 모든 줄을 완전히 어둡게 초기화
      gsap.set(lines, { opacity: 0.07, y: 14 });

      // 총 스크롤 가능 거리 = 섹션 높이 - 뷰포트 높이
      const totalScroll = section.offsetHeight - window.innerHeight;
      const n = lines.length;

      lines.forEach((line, i) => {
        const startPx = (i / n) * totalScroll;
        const endPx = Math.min(((i + 0.7) / n) * totalScroll, totalScroll);

        gsap.fromTo(
          line,
          { opacity: 0.07, y: 14 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: `top+=${Math.round(startPx)}px top`,
              end: `top+=${Math.round(endPx)}px top`,
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          }
        );
      });
    }, outerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={outerRef}
      style={{ height: `calc(${manifesto.lines.length * VH_PER_LINE}vh + 100vh)` }}
      className="relative"
    >
      {/* sticky: 스크롤 내내 화면 중앙에 고정 */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-bg">
        <span
          className="text-outline pointer-events-none absolute left-1/2 top-14 -translate-x-1/2 text-[clamp(3rem,10vw,8rem)] font-black tracking-tight"
          aria-hidden
        >
          {manifesto.label}
        </span>

        <div className="max-w-3xl px-6">
          {manifesto.lines.map((line, i) => (
            <p
              key={line}
              data-manifesto-line
              className={`text-[clamp(1.4rem,4vw,2.6rem)] font-bold leading-snug ${
                i === manifesto.lines.length - 1 ? "text-accent" : ""
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
