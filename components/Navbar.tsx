"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { en as t } from "@/dictionaries/en";

const SECTION_IDS = ["about", "skills", "projects", "education", "contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("");

  const navLinks = [
    { label: t.nav.about, href: "#about", id: "about" },
    { label: t.nav.skills, href: "#skills", id: "skills" },
    { label: t.nav.projects, href: "#projects", id: "projects" },
    { label: t.nav.education, href: "#education", id: "education" },
    { label: t.nav.contact, href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(1, window.scrollY / total) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0 || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-accent transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />
      <nav
        aria-label={t.nav.primaryLabel}
        className="container-pro flex h-16 items-center justify-between"
      >
        <Link
          href="#top"
          className="font-display text-[15px] font-semibold tracking-tight text-ink"
        >
          opankcs<span className="text-accent">.</span>com
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-dim hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="https://github.com/NauvalXQF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-line bg-panel px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors hover:border-line-strong hover:text-ink"
          >
            <GithubIcon size={13} />
            {t.nav.github}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-label={isOpen ? t.nav.closeLabel : t.nav.menuLabel}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-line bg-canvas/95 px-6 py-4 backdrop-blur-md">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-2 py-3 font-mono text-xs uppercase tracking-[0.14em] ${
                    active === link.id ? "text-accent" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 border-t border-line pt-3">
              <a
                href="https://github.com/NauvalXQF"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted"
              >
                <GithubIcon size={13} />
                {t.nav.github}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
