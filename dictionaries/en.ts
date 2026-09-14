import type { Dictionary } from "./types";

export const en: Dictionary = {
  nav: {
    about: "About",
    skills: "Skills",
    education: "Education",
    projects: "Projects",
    contact: "Contact",
    github: "GitHub",
    menuLabel: "Open menu",
    closeLabel: "Close menu",
  },
  hero: {
    badge: "Open to data internships & collaboration",
    greeting: "Hello, I'm",
    roles: [
      "Aspiring Data Scientist",
      "Informatics Student @ UNDIP",
      "Python & SQL Explorer",
      "Turning Data into Insight",
    ],
    description:
      "Informatics student at Universitas Diponegoro ('24) focused on data science — learning to clean, analyze, and communicate data clearly through small, honest projects.",
    primaryCta: "View Projects",
    secondaryCta: "Get in Touch",
    githubLabel: "GitHub",
    emailLabel: "Email",
    copied: "Copied!",
    copyEmailLabel: "Copy email",
    stats: [
      { value: "UNDIP '24", label: "Informatics" },
      { value: "Data-first", label: "Focus area" },
      { value: "Open", label: "To internship" },
    ],
    scroll: "scroll",
  },
  about: {
    eyebrow: "// about",
    title: "Data-curious student who likes building things",
    description:
      "My lane is data science, but I learn best by building end to end.",
    paragraphs: [
      "I'm Muhammad Nauval Fadli, an Informatics undergraduate at Universitas Diponegoro, class of 2024. My main interest is data science: asking questions, cleaning messy datasets, and presenting findings in a way people understand.",
      "I started from programming fundamentals (C, C++, Java) and databases (SQL), then moved into Python for analysis and web basics with Laravel and Next.js. That mix helps me understand the full flow — from where data comes from to how it is shown.",
      "Right now I'm building foundations: statistics, data wrangling, visualization, and clear storytelling. I document what I learn in small projects instead of claiming expertise I don't have yet.",
    ],
    tags: [
      { label: "Semarang, Indonesia" },
      { label: "Informatics UNDIP '24" },
      { label: "Data Science focus" },
      { label: "Open to internship" },
    ],
    highlights: [
      {
        title: "Data foundations",
        desc: "Python, SQL, spreadsheets. Cleaning, joining, aggregating, and visualizing with honest charts.",
      },
      {
        title: "Engineering basics",
        desc: "C/C++, Java, Git, basic web (Laravel, Next.js). Enough to build and ship small apps.",
      },
      {
        title: "Learning in public",
        desc: "Campus projects, self-hosting experiments, and notes from the data ecosystem.",
      },
    ],
  },
  education: {
    eyebrow: "// education",
    title: "Education & learning path",
    description:
      "Formal study plus self-directed learning toward data science.",
    items: [
      {
        period: "2024 — Present",
        title: "B.Sc. Informatics",
        org: "Universitas Diponegoro, Semarang",
        desc: "Core CS: programming, data structures, databases, computer networks, and platform development (Laravel + Next.js).",
        tags: ["GPA: —", "Focus: Data"],
      },
      {
        period: "2025 — Present",
        title: "Data science self-track",
        org: "Independent + campus projects",
        desc: "Python for analysis, SQL queries, exploratory analysis, and visualization. Building small datasets into readable insights.",
        tags: ["Python", "SQL", "EDA"],
      },
      {
        period: "Next",
        title: "Internship-ready",
        org: "Open to opportunities",
        desc: "Looking for a data internship where I can clean data, build dashboards, and learn from a real team.",
        tags: ["Internship", "Entry-level"],
      },
    ],
  },
  skills: {
    eyebrow: "// skills",
    title: "A focused, honest toolkit",
    description:
      "What I can use today — grouped by how I actually use them. No inflated proficiency bars.",
    groups: [
      {
        id: "data",
        label: "Data & Programming",
        hint: "Daily drivers for analysis",
      },
      { id: "web", label: "Web & Building", hint: "To ship small apps" },
      { id: "tools", label: "Tools & Workflow", hint: "To work cleanly" },
    ],
    levels: {
      intermediate: "Intermediate",
      familiar: "Familiar",
      learning: "Learning",
    },
    learningNote:
      "Currently learning: Pandas, data visualization, and statistics deeper. Next: Scikit-learn basics.",
  },
  projects: {
    eyebrow: "// projects",
    title: "Selected work",
    description:
      "Small but real. One shipped project plus what I'm building next toward data.",
    filters: [
      { id: "all", label: "All" },
      { id: "data", label: "Data" },
      { id: "web", label: "Web" },
      { id: "graphics", label: "Graphics" },
    ],
    featuredLabel: "Featured",
    codeLabel: "Code",
    demoLabel: "Live Demo",
    detailsLabel: "Details",
    outcomesLabel: "What I learned",
    roleLabel: "Role",
    upcomingTitle: "Up next",
    upcomingDesc: "Data-oriented builds in progress — documented as I learn.",
    upcomingItems: ["Booking Bioskop", "Data Analysis notes"],
    emptyTitle: "No projects in this category yet.",
  },
  contact: {
    eyebrow: "// contact",
    title: "Let's talk data",
    description:
      "Easiest way to reach me is email. I read everything and reply within a few days.",
    emailTitle: "Email",
    emailHint: "Best for internships & collaboration",
    githubTitle: "GitHub",
    githubHint: "Code & project history",
    primaryCta: "Send an email",
    copyLabel: "Copy",
    copiedLabel: "Copied",
    lookingTitle: "What I'm looking for",
    lookingDesc:
      "A data internship or guided project where I can help with cleaning, analysis, dashboards, or documentation — and learn good practices from the team.",
    tags: ["Data internship", "EDA & dashboards", "Python & SQL", "Willing to learn"],
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with Next.js + Tailwind CSS.",
    backToTop: "Back to top",
  },
};
