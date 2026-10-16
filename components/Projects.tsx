"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { en as t } from "@/dictionaries/en";
import { SectionHeading, Card } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { projects, type Project } from "@/data/projects";

function ProjectDetails({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 font-mono text-zinc-600 capitalize dark:bg-zinc-800 dark:text-zinc-300">
          {project.category}
        </span>
        {project.featured && (
          <span className="rounded-full bg-blue-600/10 px-2.5 py-0.5 font-medium text-blue-700 dark:text-blue-300">
            {t.projects.featuredLabel}
          </span>
        )}
        {project.live && (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-medium text-emerald-700 dark:text-emerald-300">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-emerald-500"
            />
            {t.projects.liveLabel}
          </span>
        )}
        <span className="ml-auto text-zinc-500 dark:text-zinc-400">
          {project.role}
        </span>
      </div>

      <h3
        className={`mt-3 font-semibold tracking-tight text-zinc-900 dark:text-white ${
          compact ? "text-lg" : "text-xl"
        }`}
      >
        {project.title}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      <p className="mt-4 text-xs font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
        {t.projects.outcomesLabel}
      </p>
      <ul className="mt-2 space-y-1.5">
        {project.outcomes.map((o) => (
          <li
            key={o}
            className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
          >
            <Check
              size={14}
              className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
            />
            {o}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-zinc-200 px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex gap-2 pt-5">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300 px-4 py-1.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-500"
          >
            <GithubIcon size={14} />
            {t.projects.codeLabel}
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {t.projects.demoLabel}
            <ArrowUpRight size={14} />
          </a>
        )}
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

  // Only offer categories that actually have projects.
  const visibleFilters = t.projects.filters.filter(
    (f) => f.id === "all" || projects.some((p) => p.category === f.id)
  );

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="border-t border-zinc-200/70 bg-zinc-100/50 py-20 sm:py-24 dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <div className="container-pro">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            description={t.projects.description}
          />
          <Reveal delay={100}>
            <div
              role="group"
              aria-label={t.projects.filterLabel}
              className="inline-flex flex-wrap gap-1 rounded-full border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-950"
            >
              {visibleFilters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  aria-pressed={filter === f.id}
                  className={`rounded-full px-3 py-1 text-[13px] font-medium transition-colors ${
                    filter === f.id
                      ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {filtered.length === 0 ? (
          <Card className="mt-8 p-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
            {t.projects.emptyTitle}
          </Card>
        ) : (
          <div className="mt-8 space-y-4">
            {featured.map((project, i) => (
              <Reveal key={project.id} delay={i * 60}>
                <Card className="group overflow-hidden transition-colors hover:border-zinc-300 dark:hover:border-zinc-700">
                  <div className="grid md:grid-cols-[1fr_1.1fr]">
                    <div className="relative min-h-56 overflow-hidden bg-zinc-100 md:min-h-full dark:bg-zinc-900">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-left-top transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                        />
                      ) : (
                        <div className="flex h-full min-h-56 items-center justify-center text-sm text-zinc-400">
                          No preview
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col p-6 sm:p-7">
                      <ProjectDetails project={project} />
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}

            {rest.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((project, i) => (
                  <Reveal key={project.id} delay={i * 60} className="h-full">
                    <Card className="group flex h-full flex-col overflow-hidden transition-colors hover:border-zinc-300 dark:hover:border-zinc-700">
                      <div className="relative h-44 shrink-0 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.imageAlt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-sm text-zinc-400">
                            No preview
                          </div>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <ProjectDetails project={project} compact />
                      </div>
                    </Card>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Up next — honest roadmap, not fake projects */}
        <Reveal delay={80}>
          <div className="mt-4 rounded-2xl border border-dashed border-zinc-300 p-6 sm:p-7 dark:border-zinc-700">
            <h3 className="text-[15px] font-semibold text-zinc-900 dark:text-white">
              {t.projects.upcomingTitle}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {t.projects.upcomingDesc}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {t.projects.upcomingItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300"
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
