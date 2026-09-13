"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Lang } from "@/dictionaries/types";

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLanguage();

  const options: { id: Lang; label: string }[] = [
    { id: "en", label: "EN" },
    { id: "id", label: "ID" },
  ];

  return (
    <div
      role="group"
      aria-label="Language / Bahasa"
      className={`inline-flex items-center rounded-full border border-zinc-200 bg-zinc-100/60 p-0.5 text-xs font-medium dark:border-zinc-800 dark:bg-zinc-900 ${
        compact ? "" : ""
      }`}
    >
      {options.map((opt) => {
        const active = lang === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => setLang(opt.id)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 transition-all duration-200 ${
              active
                ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white"
                : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
