import { ArrowUp } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { en as t } from "@/dictionaries/en";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-8">
      <div className="container-pro flex flex-col items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.14em] text-dim sm:flex-row">
        <p className="text-center sm:text-left">
          © {year} Muhammad Nauval Fadli · {t.footer.builtWith}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/NauvalXQF"
            target="_blank"
            rel="noopener noreferrer"
            className="hit-y flex items-center gap-1.5 transition-colors hover:text-ink"
          >
            <GithubIcon size={12} />
            NauvalXQF
          </a>
          <a
            href="#top"
            aria-label={t.footer.backToTop}
            title={t.footer.backToTop}
            className="hit-y inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-dim transition-colors hover:border-line-strong hover:text-ink"
          >
            <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
