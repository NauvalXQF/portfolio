export type Lang = "en" | "id";

export type Dictionary = {
  nav: {
    about: string;
    skills: string;
    education: string;
    projects: string;
    contact: string;
    github: string;
    menuLabel: string;
    closeLabel: string;
  };
  hero: {
    badge: string;
    greeting: string;
    roles: string[];
    description: string;
    primaryCta: string;
    secondaryCta: string;
    githubLabel: string;
    emailLabel: string;
    copied: string;
    copyEmailLabel: string;
    stats: { value: string; label: string }[];
    scroll: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    paragraphs: string[];
    tags: { label: string }[];
    highlights: { title: string; desc: string }[];
  };
  education: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      period: string;
      title: string;
      org: string;
      desc: string;
      tags: string[];
    }[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    groups: {
      id: string;
      label: string;
      hint: string;
    }[];
    levels: {
      intermediate: string;
      familiar: string;
      learning: string;
    };
    learningNote: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    filters: { id: string; label: string }[];
    featuredLabel: string;
    codeLabel: string;
    demoLabel: string;
    detailsLabel: string;
    outcomesLabel: string;
    roleLabel: string;
    upcomingTitle: string;
    upcomingDesc: string;
    upcomingItems: string[];
    emptyTitle: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailTitle: string;
    emailHint: string;
    githubTitle: string;
    githubHint: string;
    primaryCta: string;
    copyLabel: string;
    copiedLabel: string;
    lookingTitle: string;
    lookingDesc: string;
    tags: string[];
  };
  footer: {
    rights: string;
    builtWith: string;
    backToTop: string;
  };
};
