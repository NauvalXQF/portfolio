"use client";

import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { education } from "@/data/education";

export default function Education() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="education"
      className="border-y border-zinc-200/70 bg-zinc-100/50 py-20 sm:py-24 dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <div className="container-pro">
        <SectionHeading
          eyebrow={t.education.eyebrow}
          title={t.education.title}
          description={t.education.description}
        />

        <ol className="relative mt-10 space-y-4 before:absolute before:bottom-4 before:left-[19px] before:top-4 before:w-px before:bg-zinc-200 dark:before:bg-zinc-800">
          {education.map((item, i) => (
            <Reveal key={item.titleEn} delay={i * 70}>
              <li className="relative flex gap-4">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
                  <GraduationCap size={17} />
                </span>
                <div className="flex-1 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
                  <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                    {lang === "id" ? item.periodId : item.periodEn}
                  </p>
                  <h3 className="mt-1.5 text-[15px] font-semibold text-zinc-900 dark:text-white">
                    {lang === "id" ? item.titleId : item.titleEn}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {lang === "id" ? item.orgId : item.orgEn}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {lang === "id" ? item.descId : item.descEn}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
