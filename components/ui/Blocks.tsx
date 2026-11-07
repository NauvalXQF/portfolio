import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  index,
  label,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <Reveal className={`mb-10 ${className}`}>
      <div className="flex items-center gap-4 border-b border-line pb-4">
        <span className="font-mono text-[11px] tracking-[0.14em] text-accent">
          {index}
        </span>
        <span className="mono-label">{label}</span>
      </div>
      <h2 className="mt-6 max-w-3xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-lg border border-line bg-panel ${className}`}>
      {children}
    </div>
  );
}
