"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Check, Copy } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { en as t } from "@/dictionaries/en";
import { Reveal } from "@/components/Reveal";

const EMAIL = "opaw1426@gmail.com";
const GITHUB_URL = "https://github.com/NauvalXQF";

function Typewriter({ roles }: { roles: string[] }) {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const raf = requestAnimationFrame(() => setDisplayText(roles[0] ?? ""));
      return () => cancelAnimationFrame(raf);
    }

    const current = roles[roleIndex] ?? "";
    const speed = isDeleting ? 32 : 68;
    let pause: ReturnType<typeof setTimeout> | undefined;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = charIndex + 1;
        setDisplayText(current.slice(0, next));
        setCharIndex(next);
        if (next === current.length) {
          pause = setTimeout(() => setIsDeleting(true), 1700);
        }
      } else {
        const next = charIndex - 1;
        const safe = Math.max(0, next);
        setDisplayText(current.slice(0, safe));
        setCharIndex(safe);
        if (next <= 0) {
          setIsDeleting(false);
          setRoleIndex((r) => (r + 1) % roles.length);
        }
      }
    }, speed);

    return () => {
      clearTimeout(timer);
      if (pause) clearTimeout(pause);
    };
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <>
      <p aria-hidden="true" className="font-mono text-sm text-accent sm:text-base">
        {displayText}
        <span
          aria-hidden="true"
          className="caret-blink ml-0.5 inline-block w-[2px] translate-y-[2px] bg-current"
        >
          &nbsp;
        </span>
      </p>
      <span className="sr-only">{roles.join(" · ")}</span>
    </>
  );
}

function StatusDot() {
  return (
    <span className="relative flex h-1.5 w-1.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60 motion-reduce:animate-none" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ok" />
    </span>
  );
}

function SystemPanel() {
  const system = t.hero.system;

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-panel/90 shadow-[0_30px_80px_-40px_rgb(0_0_0/0.9)] backdrop-blur">
      <div className="flex items-center justify-between gap-3 border-b border-line bg-panel2 px-4 py-3">
        <span className="mono-label">{system.title}</span>
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ok">
          <StatusDot />
          {system.online}
        </span>
      </div>

      <div className="px-4 py-3">
        {system.fields.map((field) => (
          <div
            key={field.key}
            className="grid grid-cols-[72px_1fr] items-baseline gap-3 py-1 font-mono text-xs"
          >
            <span className="uppercase tracking-[0.12em] text-dim">
              {field.key}
            </span>
            <span className="text-ink">{field.value}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-line px-4 py-3">
        <div className="mono-label mb-2">{system.servicesLabel}</div>
        <ul className="space-y-1.5">
          {system.services.map((service) => (
            <li
              key={service.domain}
              className="flex items-center gap-2 font-mono text-xs"
            >
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ok" />
              <a
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-0 flex-1 truncate text-muted transition-colors hover:text-accent"
              >
                {service.domain}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-dim">
        <span className="truncate">{system.stack}</span>
        <span className="shrink-0">{system.snapshot}</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="top" className="relative pt-16">
      <div className="container-pro flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20 sm:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr]">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-md border border-line bg-panel px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                <StatusDot />
                {t.hero.availability}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-[-0.02em] text-ink sm:text-6xl xl:text-7xl">
                Muhammad Nauval Fadli
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-6 flex h-6 items-center font-mono text-sm sm:text-base">
                <span aria-hidden="true" className="mr-2 text-dim">
                  $
                </span>
                <Typewriter roles={t.hero.roles} />
              </div>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
                {t.hero.description}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-colors hover:bg-accent/90"
                >
                  {t.hero.primaryCta}
                  <ArrowRight size={15} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 rounded-md border border-line bg-panel px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-line-strong"
                >
                  {t.hero.secondaryCta}
                </a>
                <div className="flex items-center gap-2">
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.hero.githubLabel}
                    title={t.hero.githubLabel}
                    className="hit-y inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
                  >
                    <GithubIcon size={16} />
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label={t.hero.copyEmailLabel}
                    title={`${EMAIL} — ${t.hero.copyEmailLabel}`}
                    className="hit-y inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
                  >
                    {copied ? <Check size={15} className="text-ok" /> : <Copy size={15} />}
                  </button>
                </div>
              </div>
              <p
                aria-live="polite"
                className="mt-2 h-4 font-mono text-[10px] uppercase tracking-[0.14em] text-ok"
              >
                {copied ? t.hero.copied : ""}
              </p>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <SystemPanel />
          </Reveal>
        </div>

        <Reveal delay={260}>
          <a
            href="#about"
            className="mt-14 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-dim transition-colors hover:text-ink"
          >
            {t.hero.scroll}
            <ArrowDown size={13} className="animate-bounce motion-reduce:animate-none" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
