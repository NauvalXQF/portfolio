import { en as t } from "@/dictionaries/en";
import { Panel, SectionHeader } from "@/components/ui/Blocks";
import { Reveal } from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="container-pro">
        <SectionHeader
          index="01"
          label={t.about.label}
          title={t.about.title}
          description={t.about.description}
        />

        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <Reveal className="space-y-4 text-[15px] leading-relaxed text-muted">
            {t.about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-ink" : ""}>
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={80}>
            <Panel className="overflow-hidden">
              <div className="mono-label border-b border-line bg-panel2 px-4 py-3">
                spec
              </div>
              {t.about.spec.map((row) => (
                <div
                  key={row.key}
                  className="grid grid-cols-[88px_1fr] items-baseline gap-3 border-b border-line px-4 py-2.5 font-mono text-xs last:border-b-0"
                >
                  <span className="uppercase tracking-[0.12em] text-dim">
                    {row.key}
                  </span>
                  <span className="text-ink">{row.value}</span>
                </div>
              ))}
            </Panel>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {t.about.highlights.map((highlight, i) => (
            <Reveal key={highlight.title} delay={i * 70}>
              <Panel className="h-full p-5">
                <span className="font-mono text-[11px] tracking-[0.14em] text-accent">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <h3 className="mt-2 text-sm font-semibold text-ink">
                  {highlight.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                  {highlight.desc}
                </p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
