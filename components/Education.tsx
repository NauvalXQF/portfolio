import { en as t } from "@/dictionaries/en";
import { SectionHeader } from "@/components/ui/Blocks";
import { Reveal } from "@/components/Reveal";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-28">
      <div className="container-pro">
        <SectionHeader
          index="04"
          label={t.education.label}
          title={t.education.title}
          description={t.education.description}
        />

        <ol className="border-t border-line">
          {education.map((item, i) => (
            <Reveal key={item.title} delay={i * 60} as="li">
              <div className="grid gap-3 border-b border-line py-6 md:grid-cols-[170px_1fr] md:gap-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
                  {item.period}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-dim">
                    {item.org}
                  </p>
                  <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-dim"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
