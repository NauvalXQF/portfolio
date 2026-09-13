"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading, Card } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { skills, type SkillLevel } from "@/data/skills";

const levelDot: Record<SkillLevel, string> = {
  intermediate: "bg-emerald-500",
  familiar: "bg-blue-500",
  learning: "bg-amber-500",
};

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="container-pro">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          description={t.skills.description}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {t.skills.groups.map((group, gi) => {
            const groupSkills = skills.filter((s) => s.group === group.id);
            return (
              <Reveal key={group.id} delay={gi * 80}>
                <Card className="flex h-full flex-col p-5">
                  <h3 className="text-[15px] font-semibold text-zinc-900 dark:text-white">
                    {group.label}
                  </h3>
                  <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                    {group.hint}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {groupSkills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center justify-between gap-3 rounded-xl border border-zinc-100 bg-zinc-50/60 px-3 py-2 dark:border-zinc-800/80 dark:bg-zinc-900/60"
                      >
                        <span className="flex items-center gap-2 text-sm font-medium text-zinc-800 dark:text-zinc-100">
                          <span
                            aria-hidden="true"
                            className={`h-1.5 w-1.5 rounded-full ${levelDot[skill.level]}`}
                          />
                          {skill.name}
                        </span>
                        <span className="shrink-0 text-[11px] text-zinc-500 dark:text-zinc-400">
                          {t.skills.levels[skill.level]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-2xl rounded-xl border border-dashed border-zinc-300 bg-zinc-50 px-4 py-3 text-center text-[13px] leading-relaxed text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-400">
            {t.skills.learningNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
