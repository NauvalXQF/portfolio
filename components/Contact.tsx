"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading, Card } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";

const EMAIL = "opaw1426@gmail.com";
const GITHUB_URL = "https://github.com/NauvalXQF";
const GITHUB_HANDLE = "github.com/NauvalXQF";

export default function Contact() {
  const { t } = useLanguage();
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
    <section id="contact" className="py-20 sm:py-24">
      <div className="container-pro">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-3">
            <Reveal>
              <Card className="flex items-center gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                  <Mail size={17} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-zinc-500 dark:text-zinc-400">
                    {t.contact.emailTitle} — {t.contact.emailHint}
                  </span>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="block truncate text-[15px] font-medium text-zinc-900 hover:underline dark:text-white"
                  >
                    {EMAIL}
                  </a>
                </span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-white"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  {copied ? t.contact.copiedLabel : t.contact.copyLabel}
                </button>
              </Card>
            </Reveal>

            <Reveal delay={70}>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_1px_2px_rgb(0_0_0/0.04)] transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                  <GithubIcon size={17} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-zinc-500 dark:text-zinc-400">
                    {t.contact.githubTitle} — {t.contact.githubHint}
                  </span>
                  <span className="block truncate text-[15px] font-medium text-zinc-900 dark:text-white">
                    {GITHUB_HANDLE}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={120}>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                <Mail size={15} />
                {t.contact.primaryCta}
              </a>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <Card className="h-full bg-zinc-50 p-6 sm:p-7 dark:bg-zinc-900/60">
              <h3 className="text-[15px] font-semibold text-zinc-900 dark:text-white">
                {t.contact.lookingTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {t.contact.lookingDesc}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {t.contact.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
