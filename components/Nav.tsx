"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-bg/70 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-extrabold tracking-tight">
          {profile.name}
          <span className="text-accent">.</span>
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-line px-4 py-1.5 text-xs font-semibold text-fg-dim transition-colors hover:border-accent/50 hover:text-accent"
        >
          연락하기
        </a>
      </nav>
    </header>
  );
}
