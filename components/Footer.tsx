"use client";

import { ArrowUp } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
      <div className="container-pro flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-[13px] text-zinc-500 sm:text-left dark:text-zinc-400">
          © {year} Muhammad Nauval Fadli. {t.footer.rights}
          <span className="mt-0.5 block sm:mt-0 sm:inline">
            {" "}
            {t.footer.builtWith}
          </span>
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/NauvalXQF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
          >
            <GithubIcon size={13} />
            NauvalXQF
          </a>
          <a
            href="#top"
            aria-label={t.footer.backToTop}
            title={t.footer.backToTop}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-white"
          >
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
