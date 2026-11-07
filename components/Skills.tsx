import { en as t } from "@/dictionaries/en";
import { Panel, SectionHeader } from "@/components/ui/Blocks";
import { Reveal } from "@/components/Reveal";
import { skills, type SkillLevel } from "@/data/skills";

const levelDot: Record<SkillLevel, string> = {
  intermediate: "bg-accent",
  familiar: "bg-muted",
  learning: "bg-dim",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="container-pro">
        <SectionHeader
          index="02"
          label={t.skills.label}
          title={t.skills.title}
          description={t.skills.description}
        />

        <div className="grid gap-3 md:grid-cols-3">
          {t.skills.groups.map((group, gi) => {
            const groupSkills = skills.filter((s) => s.group === group.id);
            return (
              <Reveal key={group.id} delay={gi * 70}>
                <Panel className="flex h-full flex-col overflow-hidden">
                  <div className="border-b border-line bg-panel2 px-4 py-3">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                        [{group.id}]
                      </span>
                      <span className="mono-label">{group.hint}</span>
                    </div>
                    <h3 className="mt-1 text-sm font-semibold text-ink">
                      {group.label}
                    </h3>
                  </div>
                  <ul>
                    {groupSkills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5 last:border-b-0"
                      >
                        <span className="text-sm text-ink">{skill.name}</span>
                        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-dim">
                          <span
                            aria-hidden="true"
                            className={`h-1 w-1 rounded-full ${levelDot[skill.level]}`}
                          />
                          {t.skills.levels[skill.level]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Panel>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-3 rounded-lg border border-dashed border-line px-4 py-3 text-center text-[13px] leading-relaxed text-muted">
            {t.skills.learningNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
