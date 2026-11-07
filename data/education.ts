export type EducationItem = {
  period: string;
  title: string;
  org: string;
  desc: string;
  tags: string[];
};

export const education: EducationItem[] = [
  {
    period: "2024 — Present",
    title: "B.Sc. Informatics",
    org: "Universitas Diponegoro, Semarang",
    desc: "Core CS: programming, data structures, databases, computer networks, and platform development (Laravel + Next.js).",
    tags: ["Informatics", "Focus: Data"],
  },
  {
    period: "2025 — Present",
    title: "Data science self-track",
    org: "Independent + campus projects",
    desc: "Python for analysis, SQL queries, exploratory analysis, and visualization. Turning small datasets into readable insights.",
    tags: ["Python", "SQL", "EDA"],
  },
  {
    period: "Next",
    title: "Internship-ready",
    org: "Open to opportunities",
    desc: "Looking for a data internship to help with cleaning, analysis, dashboards, or documentation — and learn from a real team.",
    tags: ["Internship", "Entry-level"],
  },
];
