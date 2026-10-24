import type { Dictionary } from "./types";

export const en: Dictionary = {
  nav: {
    about: "About",
    skills: "Stack",
    projects: "Systems",
    education: "Log",
    contact: "Contact",
    github: "GitHub",
    menuLabel: "Open menu",
    closeLabel: "Close menu",
    primaryLabel: "Primary",
  },
  hero: {
    availability: "Open to data internships & collaboration",
    roles: [
      "Aspiring Data Scientist",
      "Informatics Student @ UNDIP",
      "Building & Self-hosting Real Apps",
      "Turning Data into Insight",
    ],
    description:
      "Informatics student at Universitas Diponegoro ('24) focused on data science — learning to clean and communicate data clearly while building and self-hosting real projects.",
    primaryCta: "View systems",
    secondaryCta: "Get in touch",
    cvLabel: "Download CV",
    githubLabel: "GitHub",
    copyEmailLabel: "Copy email",
    copied: "Copied!",
    scroll: "scroll",
    system: {
      title: "System status",
      online: "All systems operational",
      fields: [
        { key: "node", value: "nauval-flex5" },
        { key: "host", value: "Windows · Docker" },
        { key: "tunnel", value: "cloudflared" },
      ],
      servicesLabel: "services",
      services: [
        {
          name: "portfolio",
          domain: "opankcs.com",
          href: "https://opankcs.com",
        },
        {
          name: "reksa",
          domain: "reksa.opankcs.com",
          href: "https://reksa.opankcs.com",
        },
        {
          name: "jara",
          domain: "jara.opankcs.com",
          href: "https://jara.opankcs.com",
        },
        {
          name: "kms kopi",
          domain: "kms.opankcs.com",
          href: "https://kms.opankcs.com",
        },
      ],
      stack: "laravel · next.js · docker",
      snapshot: "snapshot · oct 2026",
    },
  },
  about: {
    label: "About",
    title: "Data-curious student who likes building things",
    description:
      "My focus is data science, but I learn best by building things end to end.",
    paragraphs: [
      "I'm Muhammad Nauval Fadli, an Informatics undergraduate at Universitas Diponegoro, class of 2024. My main interest is data science: asking questions, cleaning messy datasets, and presenting findings in a way people understand.",
      "I started from programming fundamentals (C, C++, Java) and databases (SQL), then moved into Python for analysis and web basics with Laravel and Next.js. That mix helps me understand the full flow — from where data comes from to how it is shown.",
      "Right now I'm building foundations: statistics, data wrangling, visualization, and clear storytelling — while running my own home server to deploy real apps (REKSA, JARA, KMS Kopi) with Docker and Cloudflare Tunnel.",
    ],
    spec: [
      { key: "focus", value: "Data science" },
      { key: "study", value: "Informatics · UNDIP '24" },
      { key: "base", value: "Semarang, Indonesia" },
      { key: "status", value: "Open to internships" },
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
  skills: {
    label: "Stack",
    title: "A focused, honest toolkit",
    description:
      "What I can use today — grouped by how I actually use them. No inflated proficiency bars.",
    groups: [
      {
        id: "data",
        label: "Data & Programming",
        hint: "Daily drivers",
      },
      {
        id: "web",
        label: "Web & Building",
        hint: "To ship and host",
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
    label: "Systems",
    title: "Systems in production",
    description:
      "Live services running on my own hardware — plus experiments in data and graphics.",
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
    demoLabel: "Live demo",
    outcomesLabel: "What I did",
    upcomingTitle: "Up next",
    upcomingDesc:
      "Data-oriented builds in progress — documented as I learn.",
    upcomingItems: ["Cinema Booking App", "Data analysis notes"],
    emptyTitle: "No projects in this category yet.",
  },
  education: {
    label: "Log",
    title: "Education & learning path",
    description:
      "Formal study plus self-directed learning toward data science.",
  },
  contact: {
    label: "Contact",
    title: "Let's talk data",
    description:
      "Easiest way to reach me is email. I read everything and reply within a few days.",
    emailTitle: "Email",
    emailHint: "Best for internships & collaboration",
    githubTitle: "GitHub",
    githubHint: "Code & project history",
    primaryCta: "Send an email",
    cvLabel: "Download CV",
    copyLabel: "Copy",
    copiedLabel: "Copied",
    lookingTitle: "What I'm looking for",
    lookingDesc:
      "A data internship or guided project where I can help with cleaning, analysis, dashboards, or documentation — and learn good practices from the team.",
    tags: ["Data internship", "EDA & dashboards", "Python & SQL", "Willing to learn"],
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with Next.js + Tailwind · self-hosted on a home server.",
    backToTop: "Back to top",
  },
};
