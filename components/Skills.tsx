import { skills } from "@/data/skills";

const categoryColors: Record<string, string> = {
  language: "border-blue-500/30 bg-blue-500/10 text-blue-300",
  framework: "border-purple-500/30 bg-purple-500/10 text-purple-300",
  design: "border-pink-500/30 bg-pink-500/10 text-pink-300",
  tool: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
};

const categoryLabels: Record<string, string> = {
  language: "Languages",
  framework: "Frameworks",
  design: "Design",
  tool: "Tools",
};

// Skill icons (text-based since we don't have image assets yet)
const skillIcons: Record<string, string> = {
  Python: "🐍",
  Java: "☕",
  "C": "⚙️",
  "C++": "⚙️",
  PHP: "🐘",
  SQL: "🗄️",
  Laravel: "🔴",
  "Next.js": "▲",
  Figma: "🎨",
  "Cisco Packet Tracer": "🌐",
  Git: "🔀",
};

const categories = ["language", "framework", "design", "tool"] as const;

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-blue-400 text-sm font-mono mb-2">// skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Tech Stack
          </h2>
          <p className="text-gray-500 mt-2 max-w-lg">
            Tools and technologies I&apos;ve worked with — from data pipelines
            to web apps.
          </p>
        </div>

        {/* Skills by category */}
        <div className="space-y-10">
          {categories.map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat);
            if (catSkills.length === 0) return null;
            return (
              <div key={cat}>
                <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">
                  {categoryLabels[cat]}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {catSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-200 hover:scale-105 ${categoryColors[skill.category]}`}
                    >
                      <span>{skillIcons[skill.name] ?? "✦"}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
