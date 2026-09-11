"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Github, Mail } from "lucide-react";

const roles = [
  "Data Scientist Enthusiast",
  "CS Student @ Undip",
  "Problem Solver",
  "Lifelong Learner",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((r) => (r + 1) % roles.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center dot-grid overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Greeting badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for internship & collaboration
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
          <span className="text-white">Muhammad </span>
          <span className="gradient-text">Nauval</span>
          <br />
          <span className="text-white">Fadli</span>
        </h1>

        {/* Typewriter role */}
        <div className="h-10 flex items-center justify-center mb-6">
          <p className="text-xl md:text-2xl text-gray-400 font-mono">
            {displayText}
            <span className="cursor-blink text-blue-400">|</span>
          </p>
        </div>

        {/* Sub-description */}
        <p className="text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed">
          Informatika UNDIP &apos;24 — passionate about turning data into
          meaningful insights and building cool things along the way.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-all duration-200 glow-blue"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl border border-white/10 text-gray-300 hover:border-blue-500/50 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Mail size={16} />
            Get in Touch
          </a>
          <a
            href="https://github.com/NauvalQXQF"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl border border-white/10 text-gray-300 hover:border-purple-500/50 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 animate-bounce">
          <span className="text-xs">scroll</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </section>
  );
}
