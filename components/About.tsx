import { BookOpen, Code2, Database } from "lucide-react";

const highlights = [
  {
    icon: <Database size={20} className="text-blue-400" />,
    title: "Data Science",
    desc: "Passionate about machine learning, data analysis, and turning raw data into actionable insights.",
  },
  {
    icon: <Code2 size={20} className="text-purple-400" />,
    title: "Software Dev",
    desc: "From C++ OpenGL games to web applications — I enjoy building across the stack.",
  },
  {
    icon: <BookOpen size={20} className="text-cyan-400" />,
    title: "Always Learning",
    desc: "Currently diving deep into Next.js, Laravel, and expanding my data science toolkit.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-blue-400 text-sm font-mono mb-2">// about me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Who I Am
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="space-y-5 text-gray-400 leading-relaxed">
            <p>
              Hey! I&apos;m{" "}
              <span className="text-white font-semibold">
                Muhammad Nauval Fadli
              </span>
              , an Informatics student at{" "}
              <span className="text-blue-400">
                Universitas Diponegoro (Undip)
              </span>
              , class of &apos;24.
            </p>
            <p>
              My main passion lies in{" "}
              <span className="text-white">Data Science</span> — I love
              exploring datasets, building models, and extracting meaning from
              numbers. But I&apos;m also someone who enjoys the process of
              building things: games, apps, simulations — you name it.
            </p>
            <p>
              At campus, I&apos;m currently learning{" "}
              <span className="text-white">
                Specialized Platform Development
              </span>{" "}
              using Laravel and Next.js, which is expanding my perspective on
              full-stack development.
            </p>
            <p>
              Outside of coding, I&apos;m always tinkering — whether it&apos;s
              self-hosting a server from my dorm laptop or exploring new tools
              in the data ecosystem.
            </p>

            {/* Quick facts */}
            <div className="pt-2 flex flex-wrap gap-3">
              {["📍 Semarang, Indonesia", "🎓 Informatika Undip '24", "💡 Data Science", "🔧 Open to Internship"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-400"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right — highlight cards */}
          <div className="space-y-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 rounded-xl bg-white/3 border border-white/5 hover:border-blue-500/30 hover:bg-white/5 transition-all duration-300"
              >
                <div className="mt-0.5 shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
