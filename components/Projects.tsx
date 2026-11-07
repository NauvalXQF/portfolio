"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { en as t } from "@/dictionaries/en";
import { Panel, SectionHeader } from "@/components/ui/Blocks";
import { Reveal } from "@/components/Reveal";
import { projects, type Project } from "@/data/projects";

function ServiceBar({ project }: { project: Project }) {
  const host = project.demoUrl ? new URL(project.demoUrl).hostname : null;

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-b border-line bg-panel2 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em]">
      <span className="flex items-center gap-2 text-dim">
        <span
          aria-hidden="true"
          className={`h-1 w-1 rounded-full ${project.live ? "bg-ok" : "bg-line-strong"}`}
        />
        {project.slug}
      </span>
      {host ? <span className="text-dim">{host}</span> : null}
      <span className="ml-auto flex items-center gap-3">
        {project.featured ? <span className="text-accent">featured</span> : null}
        {project.live ? <span className="text-ok">live</span> : null}
      </span>
    </div>
  );
}

function ProjectDetails({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <>
      <h3
        className={`font-display font-semibold tracking-tight text-ink ${
          compact ? "text-lg" : "text-2xl"
        }`}
      >
        {project.title}
      </h3>
      <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-dim">
        {project.role}
      </p>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mono-label mt-5">{t.projects.outcomesLabel}</div>
      <ul className="mt-2 space-y-1.5">
        {project.outcomes.map((outcome) => (
          <li
            key={outcome}
            className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
          >
            <span
              aria-hidden="true"
              className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent"
            />
            {outcome}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-dim"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-line px-4 py-1.5 text-sm text-ink transition-colors hover:border-line-strong"
          >
            <GithubIcon size={14} />
            {t.projects.codeLabel}
          </a>
        ) : null}
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-1.5 text-sm font-medium text-accent-ink transition-colors hover:bg-accent/90"
          >
            {t.projects.demoLabel}
            <ArrowUpRight size={14} />
          </a>
        ) : null}
      </div>
    </>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  const visibleFilters = t.projects.filters.filter(
    (f) => f.id === "all" || projects.some((p) => p.category === f.id)
  );

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="container-pro">
        <SectionHeader
          index="03"
          label={t.projects.label}
          title={t.projects.title}
          description={t.projects.description}
        />

        <Reveal className="mb-8 flex justify-start sm:justify-end">
          <div
            role="group"
            aria-label={t.projects.filterLabel}
            className="inline-flex flex-wrap gap-1.5"
          >
            {visibleFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
                className={`rounded border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors ${
                  filter === f.id
                    ? "border-accent bg-accent text-accent-ink"
                    : "border-line text-dim hover:border-line-strong hover:text-ink"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {filtered.length === 0 ? (
          <Panel className="p-10 text-center text-sm text-muted">
            {t.projects.emptyTitle}
          </Panel>
        ) : (
          <div className="space-y-3">
            {featured.map((project, i) => (
              <Reveal key={project.id} delay={i * 60}>
                <Panel className="group overflow-hidden transition-colors hover:border-line-strong">
                  <ServiceBar project={project} />
                  <div className="grid md:grid-cols-[1fr_1.05fr]">
                    <div className="relative min-h-56 overflow-hidden border-b border-line bg-panel2 md:min-h-full md:border-b-0 md:border-r">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-left-top transition-transform duration-300 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
                        />
                      ) : (
                        <div className="flex h-full min-h-56 items-center justify-center text-sm text-dim">
                          No preview
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col p-6 sm:p-7">
                      <ProjectDetails project={project} />
                    </div>
                  </div>
                </Panel>
              </Reveal>
            ))}

            {rest.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((project, i) => (
                  <Reveal key={project.id} delay={i * 60} className="h-full">
                    <Panel className="group flex h-full flex-col overflow-hidden transition-colors hover:border-line-strong">
                      <ServiceBar project={project} />
                      <div className="relative h-44 shrink-0 overflow-hidden border-b border-line bg-panel2">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.imageAlt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-sm text-dim">
                            No preview
                          </div>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <ProjectDetails project={project} compact />
                      </div>
                    </Panel>
                  </Reveal>
                ))}
              </div>
            ) : null}
          </div>
        )}

        <Reveal delay={80}>
          <div className="mt-3 rounded-lg border border-dashed border-line p-5 sm:p-6">
            <div className="mono-label text-accent">{t.projects.upcomingTitle}</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {t.projects.upcomingDesc}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {t.projects.upcomingItems.map((item) => (
                <span
                  key={item}
                  className="rounded border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-dim"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
