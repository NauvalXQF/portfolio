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
    primaryLabel: "Primary",
  },
  hero: {
    badge: "Open to data internships & collaboration",
    greeting: "Hello, I'm",
    roles: [
      "Aspiring Data Scientist",
      "Informatics Student @ UNDIP",
      "Building & Self-hosting Real Apps",
      "Turning Data into Insight",
    ],
    description:
      "Informatics student at Universitas Diponegoro ('24) focused on data science — learning to clean and communicate data clearly while building and self-hosting real projects.",
    primaryCta: "View Projects",
    secondaryCta: "Get in Touch",
    githubLabel: "GitHub",
    copied: "Copied!",
    copyEmailLabel: "Copy email",
    stats: [
      { value: "UNDIP '24", label: "Informatics" },
      { value: "3 apps", label: "Live & self-hosted" },
      { value: "Open", label: "To internship" },
    ],
    scroll: "scroll",
  },
  about: {
    eyebrow: "// about",
    title: "Data-curious student who likes building things",
    description:
      "My focus is data science, but I learn best by building things end to end.",
    paragraphs: [
      "I'm Muhammad Nauval Fadli, an Informatics undergraduate at Universitas Diponegoro, class of 2024. My main interest is data science: asking questions, cleaning messy datasets, and presenting findings in a way people understand.",
      "I started from programming fundamentals (C, C++, Java) and databases (SQL), then moved into Python for analysis and web basics with Laravel and Next.js. That mix helps me understand the full flow — from where data comes from to how it is shown.",
      "Right now I'm building foundations: statistics, data wrangling, visualization, and clear storytelling — while running my own home server to deploy real apps (REKSA, JARA, KMS Kopi) with Docker and Cloudflare Tunnel.",
    ],
    tags: [
      { label: "Semarang, Indonesia" },
      { label: "Informatics UNDIP '24" },
      { label: "Data Science focus" },
      { label: "Self-hosting & Docker" },
      { label: "Open to internship" },
    ],
    highlights: [
      {
        title: "Data foundations",
        desc: "Python, SQL, spreadsheets. Cleaning, joining, aggregating, and visualizing with honest charts.",
      },
      {
        title: "Engineering basics",
        desc: "C/C++, Java, Git, and web with Laravel + Next.js (Blade, MySQL, Docker). Enough to build, ship, and host real apps.",
      },
      {
        title: "Learning in public",
        desc: "Campus and team projects, a self-hosted Docker server, and notes from the data ecosystem.",
      },
    ],
  },
  education: {
    eyebrow: "// education",
    title: "Education & learning path",
    description:
      "Formal study plus self-directed learning toward data science.",
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
      {
        id: "web",
        label: "Web & Building",
        hint: "To ship and host real apps",
      },
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
      "Small but real. Shipped and self-hosted apps, plus what I'm building next on the data path.",
    filters: [
      { id: "all", label: "All" },
      { id: "data", label: "Data" },
      { id: "web", label: "Web" },
      { id: "graphics", label: "Graphics" },
    ],
    featuredLabel: "Featured",
    liveLabel: "Live",
    filterLabel: "Filter projects",
    codeLabel: "Code",
    demoLabel: "Live Demo",
    outcomesLabel: "What I learned",
    upcomingTitle: "Up next",
    upcomingDesc: "Data-oriented builds in progress — documented as I learn.",
    upcomingItems: ["Cinema Booking App", "Data analysis notes"],
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
