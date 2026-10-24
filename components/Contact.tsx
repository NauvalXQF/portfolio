"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Download } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { en as t } from "@/dictionaries/en";
import { Panel, SectionHeader } from "@/components/ui/Blocks";
import { Reveal } from "@/components/Reveal";

const EMAIL = "opaw1426@gmail.com";
const GITHUB_URL = "https://github.com/NauvalXQF";
const GITHUB_HANDLE = "github.com/NauvalXQF";

export default function Contact() {
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
    <section id="contact" className="py-24 sm:py-28">
      <div className="container-pro">
        <SectionHeader
          index="05"
          label={t.contact.label}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="grid gap-3 lg:grid-cols-2">
          <div className="space-y-3">
            <Reveal>
              <Panel className="overflow-hidden">
                <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
                  <div className="min-w-0">
                    <div className="mono-label">
                      {t.contact.emailTitle} — {t.contact.emailHint}
                    </div>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="mt-1 block truncate font-mono text-sm text-ink transition-colors hover:text-accent"
                    >
                      {EMAIL}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="hit-y inline-flex shrink-0 items-center gap-1.5 rounded-md border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-dim transition-colors hover:border-line-strong hover:text-ink"
                  >
                    {copied ? <Check size={12} className="text-ok" /> : <Copy size={12} />}
                    {copied ? t.contact.copiedLabel : t.contact.copyLabel}
                  </button>
                </div>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 px-4 py-3 transition-colors hover:bg-panel2"
                >
                  <div className="min-w-0">
                    <div className="mono-label">
                      {t.contact.githubTitle} — {t.contact.githubHint}
                    </div>
                    <div className="mt-1 flex items-center gap-2 truncate font-mono text-sm text-ink">
                      <GithubIcon size={14} />
                      {GITHUB_HANDLE}
                    </div>
                  </div>
                  <ArrowUpRight size={15} className="shrink-0 text-dim" />
                </a>
              </Panel>
            </Reveal>

            <Reveal delay={90}>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-colors hover:bg-accent/90"
                >
                  {t.contact.primaryCta}
                </a>
                <a
                  href="/Muhammad_Nauval_Fadli_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-line bg-panel px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-line-strong"
                >
                  <Download size={15} />
                  {t.contact.cvLabel}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <Panel className="h-full overflow-hidden">
              <div className="mono-label border-b border-line bg-panel2 px-4 py-3">
                {t.contact.lookingTitle}
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-muted">
                  {t.contact.lookingDesc}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {t.contact.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Panel>
          </Reveal>
        </div>

        <span aria-live="polite" className="sr-only">
          {copied ? t.contact.copiedLabel : ""}
        </span>
      </div>
    </section>
  );
}
