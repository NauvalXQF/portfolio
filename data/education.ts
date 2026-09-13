export type EducationItem = {
  periodEn: string;
  periodId: string;
  titleEn: string;
  titleId: string;
  orgEn: string;
  orgId: string;
  descEn: string;
  descId: string;
  tags: string[];
};

export const education: EducationItem[] = [
  {
    periodEn: "2024 — Present",
    periodId: "2024 — Sekarang",
    titleEn: "B.Sc. Informatics",
    titleId: "S1 Informatika",
    orgEn: "Universitas Diponegoro, Semarang",
    orgId: "Universitas Diponegoro, Semarang",
    descEn:
      "Core CS: programming, data structures, databases, computer networks, and specialized platform development (Laravel + Next.js).",
    descId:
      "CS inti: pemrograman, struktur data, basis data, jaringan komputer, dan pengembangan platform (Laravel + Next.js).",
    tags: ["Informatics", "Focus: Data"],
  },
  {
    periodEn: "2025 — Present",
    periodId: "2025 — Sekarang",
    titleEn: "Data science self-track",
    titleId: "Jalur mandiri data science",
    orgEn: "Independent + campus projects",
    orgId: "Mandiri + proyek kampus",
    descEn:
      "Python for analysis, SQL queries, exploratory analysis, and visualization. Turning small datasets into readable insights.",
    descId:
      "Python untuk analisis, query SQL, exploratory analysis, dan visualisasi. Mengubah dataset kecil jadi insight yang terbaca.",
    tags: ["Python", "SQL", "EDA"],
  },
  {
    periodEn: "Next",
    periodId: "Berikutnya",
    titleEn: "Internship-ready",
    titleId: "Siap magang",
    orgEn: "Open to opportunities",
    orgId: "Terbuka untuk kesempatan",
    descEn:
      "Looking for a data internship to help with cleaning, analysis, dashboards, or documentation — and learn from a real team.",
    descId:
      "Mencari magang data untuk membantu cleaning, analisis, dashboard, atau dokumentasi — dan belajar dari tim yang nyata.",
    tags: ["Internship", "Entry-level"],
  },
];
