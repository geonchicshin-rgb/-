"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, type Project, type ProjectMedia } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

function Media({ media, title }: { media: ProjectMedia; title: string }) {
  switch (media.type) {
    case "video": {
      const video = (
        <video
          src={media.src}
          poster={media.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-auto w-full"
        />
      );
      if (media.portrait) {
        return (
          <div className="mx-auto w-full max-w-[250px] overflow-hidden rounded-[2.2rem] border-[6px] border-[#1c1c20] bg-bg-soft shadow-2xl">
            {video}
          </div>
        );
      }
      return (
        <div className="overflow-hidden rounded-2xl border border-line bg-bg-soft shadow-2xl">
          {video}
        </div>
      );
    }
    case "phone":
      return (
        <div className="mx-auto w-full max-w-[250px] overflow-hidden rounded-[2.2rem] border-[6px] border-[#1c1c20] bg-bg-soft shadow-2xl">
          <Image
            src={media.src}
            alt={`${title} 앱 화면`}
            width={430}
            height={1024}
            className="h-auto w-full"
          />
        </div>
      );
    case "photo":
      return (
        <div className="overflow-hidden rounded-2xl border border-line shadow-2xl">
          <Image
            src={media.src}
            alt={`${title} 현장 사진`}
            width={1024}
            height={576}
            className="h-auto w-full"
          />
        </div>
      );
    case "stats":
      return (
        <div className="grid grid-cols-2 gap-3">
          {media.items.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-line bg-bg-soft p-5 md:p-6"
            >
              <p className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-extrabold text-accent">
                {s.value}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-fg-dim md:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      );
  }
}

function ProjectScene({ project, flip }: { project: Project; flip: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-p-text] > *",
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ref.current, start: "top 65%" },
        }
      );

      // 미디어: 안에서 밖으로 밀려나오는 리빌
      gsap.fromTo(
        "[data-p-media]",
        { clipPath: "inset(12% 12% 12% 12% round 24px)", scale: 0.92, opacity: 0 },
        {
          clipPath: "inset(0% 0% 0% 0% round 24px)",
          scale: 1,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 60%" },
        }
      );

      // 배경 인덱스 넘버 패럴랙스
      gsap.fromTo(
        "[data-p-index]",
        { yPercent: 30 },
        {
          yPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
      <span
        data-p-index
        className="text-outline pointer-events-none absolute -top-6 right-2 select-none text-[clamp(6rem,18vw,14rem)] font-black leading-none md:right-0"
        aria-hidden
      >
        {project.index}
      </span>

      <div
        className={`relative grid items-center gap-12 md:grid-cols-2 md:gap-16 ${
          flip ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div data-p-text>
          <p className="text-xs font-semibold tracking-[0.25em] text-accent">
            {project.category.toUpperCase()}
          </p>
          <h3 className="mt-4 text-[clamp(2rem,5vw,3.4rem)] font-extrabold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-base font-medium text-fg-dim md:text-lg">
            {project.tagline}
          </p>

          <p className="mt-5 text-xs tracking-wide text-fg-dim">
            {project.period} · {project.role}
          </p>

          <dl className="mt-8 space-y-5 border-t border-line pt-8">
            {(
              [
                ["문제", project.problem],
                ["실행", project.action],
                ["결과", project.result],
              ] as const
            ).map(([label, text]) => (
              <div key={label} className="grid grid-cols-[3.5rem_1fr] gap-3">
                <dt className="pt-0.5 text-xs font-bold tracking-widest text-accent">
                  {label}
                </dt>
                <dd className="text-sm leading-relaxed text-fg/85 md:text-[15px]">
                  {text}
                </dd>
              </div>
            ))}
          </dl>

          <ul className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li
                key={s}
                className="rounded-full border border-line bg-bg-soft px-3.5 py-1.5 text-xs text-fg-dim"
              >
                {s}
              </li>
            ))}
          </ul>

          {project.link && (
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
            >
              {project.link.label}
              <span aria-hidden>↗</span>
            </a>
          )}
        </div>

        <div
          data-p-media
          className={
            project.extraMedia
              ? "flex flex-wrap items-start justify-center gap-5 [&>*]:m-0 [&>*]:w-[min(44%,250px)] [&>*]:min-w-[180px]"
              : undefined
          }
        >
          <Media media={project.media} title={project.title} />
          {project.extraMedia && (
            <Media media={project.extraMedia} title={project.title} />
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * 스토리 3장 — "증거".
 * 프로젝트 하나하나가 여정의 정거장.
 */
export default function Works() {
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-works-head] > *",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: headRef.current, start: "top 70%" },
        }
      );
    }, headRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="works" className="relative">
      <div ref={headRef} className="mx-auto max-w-6xl px-6 pt-32 md:pt-44">
        <div data-works-head>
          <p className="text-xs font-semibold tracking-[0.3em] text-accent">
            WORKS
          </p>
          <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,5vw,3.6rem)] font-extrabold leading-tight tracking-tight">
            말보다 결과물이
            <br />
            먼저 도착하게.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-fg-dim md:text-base">
            직접 정의한 문제, AI와 함께한 실행, 그리고 완성까지. 세 가지
            증거를 순서대로 보여드립니다.
          </p>
        </div>
      </div>

      {projects.map((p, i) => (
        <ProjectScene key={p.id} project={p} flip={i % 2 === 1} />
      ))}
    </section>
  );
}
