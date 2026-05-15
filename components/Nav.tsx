"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur-sm border-b border-chalk/[0.08]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="flex items-baseline gap-2">
          <span
            className="font-display text-lime leading-none select-none"
            style={{ fontSize: "1.8rem", letterSpacing: "-0.01em" }}
          >
            NBR
          </span>
          <span className="font-body text-chalk/25 text-[0.58rem] tracking-[0.15em] uppercase hidden sm:inline">
            Northbridge Athletic
          </span>
        </a>

        <a
          href="#programs"
          className="font-body font-semibold text-[0.7rem] tracking-[0.12em] uppercase bg-lime text-ink px-5 py-2.5 rounded-full hover:bg-lime-dark transition-colors duration-200"
        >
          Book a Trial
        </a>
      </nav>
    </header>
  );
}
