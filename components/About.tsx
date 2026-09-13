"use client";

import { Code2, Database, NotebookPen, GraduationCap, MapPin, Sparkles, Briefcase } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading, Card } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";

const highlightIcons = [Database, Code2, NotebookPen];
const tagIcons = [MapPin, GraduationCap, Sparkles, Briefcase];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="container-pro">
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          description={t.about.description}
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal className="space-y-4 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t.about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-zinc-800 dark:text-zinc-200" : ""}>
                {p}
              </p>
            ))}

            <div className="flex flex-wrap gap-2 pt-3">
              {t.about.tags.map((tag, i) => {
                const Icon = tagIcons[i % tagIcons.length];
                return (
                  <span
                    key={tag.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    <Icon size={12} className="text-zinc-400 dark:text-zinc-500" />
                    {tag.label}
                  </span>
                );
              })}
            </div>
          </Reveal>

          <div className="space-y-3">
            {t.about.highlights.map((h, i) => {
              const Icon = highlightIcons[i % highlightIcons.length];
              return (
                <Reveal key={h.title} delay={i * 80}>
                  <Card className="flex gap-3.5 p-5 transition-colors hover:border-zinc-300 dark:hover:border-zinc-700">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                      <Icon size={17} />
                    </span>
                    <span>
                      <span className="block text-[15px] font-semibold text-zinc-900 dark:text-white">
                        {h.title}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {h.desc}
                      </span>
                    </span>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
