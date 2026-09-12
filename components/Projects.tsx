import Image from "next/image";
import { ExternalLink, Tag } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-blue-400 text-sm font-mono mb-2">// projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Things I&apos;ve Built
          </h2>
          <p className="text-gray-500 mt-2 max-w-lg">
            A selection of projects — from 3D games to data experiments. More
            coming soon!
          </p>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col rounded-2xl border border-white/5 bg-white/3 hover:border-blue-500/30 hover:bg-white/5 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-purple-600" />

              {/* Project image / thumbnail */}
              <div className="relative w-full h-48 overflow-hidden bg-white/5">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/30 to-purple-900/30">
                    <span className="text-4xl">🚀</span>
                  </div>
                )}
                {/* Overlay gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/80 via-transparent to-transparent" />
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6">
                {/* Category badge */}
                <div className="flex items-center gap-2 mb-4">
                  <Tag size={12} className="text-gray-500" />
                  <span className="text-xs text-gray-500 font-mono">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Long description */}
                <p className="text-gray-500 text-xs leading-relaxed mb-6">
                  {project.longDescription}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20"
                    >
                      <GithubIcon size={14} />
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors px-3 py-1.5 rounded-lg border border-blue-500/30 hover:border-blue-400/50"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Coming soon placeholder */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 p-10 text-center min-h-[300px]">
            <div className="text-4xl mb-4">🚀</div>
            <p className="text-gray-500 text-sm mb-1">More coming soon</p>
            <p className="text-gray-600 text-xs">
              LastBite, Booking Bioskop, Data Analysis...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
