import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Muhammad Nauval Fadli. Built with Next.js + Tailwind CSS.
        </p>
        <a
          href="https://github.com/NauvalXQF"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-white transition-colors text-sm"
        >
          <Github size={14} />
          NauvalXQF
        </a>
      </div>
    </footer>
  );
}
