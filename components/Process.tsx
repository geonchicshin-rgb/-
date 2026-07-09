"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { process } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

/**
 * 스토리 4장 — "방식".
 * 스펙 대신 일하는 방식을 보여준다.
 */
export default function Process() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-proc-head] > *",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ref.current, start: "top 70%" },
        }
      );
      gsap.fromTo(
        "[data-proc-card]",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: "[data-proc-grid]", start: "top 75%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative border-t border-line bg-bg-soft/50">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
        <div data-proc-head>
          <p className="text-xs font-semibold tracking-[0.3em] text-accent">
            {process.label}
          </p>
          <h2 className="mt-4 whitespace-pre-line text-[clamp(1.9rem,5vw,3.4rem)] font-extrabold leading-tight tracking-tight">
            {process.title}
          </h2>
        </div>

        <div
          data-proc-grid
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {process.steps.map((step) => (
            <div
              key={step.no}
              data-proc-card
              className="group rounded-2xl border border-line bg-bg p-6 transition-colors hover:border-accent/40"
            >
              <p className="text-sm font-black text-accent">{step.no}</p>
              <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-dim">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="mr-2 text-xs tracking-[0.2em] text-fg-dim">
            TOOLS
          </span>
          {process.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-accent-soft px-4 py-1.5 text-xs font-medium text-accent"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
