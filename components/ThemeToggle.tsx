"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useLanguage();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={lang === "id" ? "Ganti tema" : "Toggle theme"}
      title={lang === "id" ? "Ganti tema" : "Toggle theme"}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-white"
    >
      {isDark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
