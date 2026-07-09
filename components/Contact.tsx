"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile, contact } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

/**
 * 스토리 5장 — "연결".
 * 깊은 곳까지 들어왔던 방문자가 다시 나가며 남기는 접점.
 */
export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-contact] > *",
        { opacity: 0, y: 44 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ref.current, start: "top 65%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.04] blur-3xl"
        aria-hidden
      />
      <div
        data-contact
        className="relative mx-auto flex min-h-[90vh] max-w-4xl flex-col items-center justify-center px-6 py-32 text-center"
      >
        <p className="text-xs font-semibold tracking-[0.3em] text-accent">
          {contact.label}
        </p>
        <h2 className="mt-6 whitespace-pre-line text-[clamp(2.2rem,7vw,5rem)] font-extrabold leading-tight tracking-tight">
          {contact.title}
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-fg-dim md:text-base">
          {contact.desc}
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-bg transition-transform hover:scale-[1.04]"
          >
            {profile.email}
          </a>
          {profile.phone && (
            <a
              href={`tel:${profile.phone.replace(/-/g, "")}`}
              className="rounded-full border border-line px-8 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-accent/50 hover:text-accent"
            >
              {profile.phone}
            </a>
          )}
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-8 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-accent/50 hover:text-accent"
            >
              GitHub ↗
            </a>
          )}
        </div>

        <footer className="mt-24 text-xs text-fg-dim">
          © {new Date().getFullYear()} {profile.name}. Built with AI, finished
          by human.
        </footer>
      </div>
    </section>
  );
}
