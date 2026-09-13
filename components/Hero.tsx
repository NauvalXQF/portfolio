"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Check, Copy, Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";

const EMAIL = "opaw1426@gmail.com";
const GITHUB_URL = "https://github.com/NauvalXQF";

function Typewriter({ roles }: { roles: string[] }) {
  // Start empty on both server and first client render to avoid hydration
  // mismatch; reduced-motion text is set after mount.
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
    <p
      aria-live="polite"
      className="font-mono text-base text-blue-700 sm:text-lg dark:text-blue-300"
    >
      {displayText}
      <span
        aria-hidden="true"
        className="caret-blink ml-0.5 inline-block w-[2px] translate-y-[2px] bg-current"
      >
        &nbsp;
      </span>
    </p>
  );
}

export default function Hero() {
  const { t, lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — fall back to mailto
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div aria-hidden="true" className="subtle-grid absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-3xl dark:bg-blue-500/10"
      />

      <div className="container-pro relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center py-20 text-center sm:py-24">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-[13px] text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t.hero.badge}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-8 text-sm font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
            {t.hero.greeting}
          </p>
          <h1 className="mt-2 text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-white">
            Muhammad Nauval Fadli
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-5 flex h-8 items-center justify-center">
            <Typewriter key={lang} roles={t.hero.roles} />
          </div>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t.hero.description}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 sm:w-auto dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              {t.hero.primaryCta}
              <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-zinc-300 bg-white px-6 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 sm:w-auto dark:border-zinc-700 dark:bg-transparent dark:text-zinc-100 dark:hover:border-zinc-500 dark:hover:bg-zinc-900"
            >
              <Mail size={15} />
              {t.hero.secondaryCta}
            </a>
            <div className="flex items-center gap-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.hero.githubLabel}
                title={t.hero.githubLabel}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-white"
              >
                <GithubIcon size={17} />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={t.hero.copyEmailLabel}
                title={`${EMAIL} — ${t.hero.copyEmailLabel}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-white"
              >
                {copied ? <Check size={16} className="text-emerald-600" /> : <Copy size={15} />}
              </button>
            </div>
          </div>
          <p aria-live="polite" className="mt-2 h-4 text-xs text-emerald-600 dark:text-emerald-400">
            {copied ? t.hero.copied : ""}
          </p>
        </Reveal>

        <Reveal delay={260}>
          <dl className="mt-6 grid w-full max-w-lg grid-cols-3 divide-x divide-zinc-200 rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950/70">
            {t.hero.stats.map((s) => (
              <div key={s.label} className="px-4 py-3.5">
                <dt className="order-2 mt-1 block text-xs text-zinc-500 dark:text-zinc-400">
                  {s.label}
                </dt>
                <dd className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <a
          href="#about"
          className="mt-12 inline-flex flex-col items-center gap-1 text-xs text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
        >
          {t.hero.scroll}
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
