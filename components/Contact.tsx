import { Github, Mail, MapPin } from "lucide-react";

const links = [
  {
    label: "Email",
    value: "opaw1426@gmail.com",
    href: "mailto:opaw1426@gmail.com",
    icon: <Mail size={18} className="text-blue-400" />,
    display: "opaw1426@gmail.com",
  },
  {
    label: "GitHub",
    value: "NauvalXQF",
    href: "https://github.com/NauvalXQF",
    icon: <Github size={18} className="text-purple-400" />,
    display: "github.com/NauvalXQF",
  },
  {
    label: "Location",
    value: "Semarang, Indonesia",
    href: null,
    icon: <MapPin size={18} className="text-cyan-400" />,
    display: "Semarang, Indonesia",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-blue-400 text-sm font-mono mb-2">// contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Get In Touch
          </h2>
          <p className="text-gray-500 mt-2 max-w-lg">
            Open to internship opportunities, collaborations, or just a good
            conversation about data and tech.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — contact info */}
          <div className="space-y-6">
            {links.map((link) => (
              <div
                key={link.label}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/3 hover:border-blue-500/20 hover:bg-white/5 transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-white/5">{link.icon}</div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{link.label}</p>
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.display}
                    </a>
                  ) : (
                    <p className="text-gray-300 text-sm">{link.display}</p>
                  )}
                </div>
              </div>
            ))}

            {/* CTA */}
            <a
              href="mailto:opaw1426@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-all duration-200 glow-blue mt-2"
            >
              <Mail size={16} />
              Send me an email
            </a>
          </div>

          {/* Right — message */}
          <div className="p-8 rounded-2xl border border-white/5 bg-white/3">
            <h3 className="text-white font-bold text-xl mb-3">
              Let&apos;s build something together 🤝
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              I&apos;m currently a student at Informatika Undip with a deep
              interest in data science and machine learning. Whether you have a
              project idea, an internship opportunity, or just want to connect
              — feel free to reach out!
            </p>
            <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-2">
              {["Open to Internship", "Data Science", "Collaboration", "Full-Stack Dev"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs bg-blue-500/10 border border-blue-500/20 text-blue-400"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
