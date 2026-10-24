export type Dictionary = {
  nav: {
    about: string;
    skills: string;
    projects: string;
    education: string;
    contact: string;
    github: string;
    menuLabel: string;
    closeLabel: string;
    primaryLabel: string;
  };
  hero: {
    availability: string;
    roles: string[];
    description: string;
    primaryCta: string;
    secondaryCta: string;
    cvLabel: string;
    githubLabel: string;
    copyEmailLabel: string;
    copied: string;
    scroll: string;
    system: {
      title: string;
      online: string;
      fields: { key: string; value: string }[];
      servicesLabel: string;
      services: {
        name: string;
        domain: string;
        href: string;
      }[];
      stack: string;
      snapshot: string;
    };
  };
  about: {
    label: string;
    title: string;
    description: string;
    paragraphs: string[];
    spec: { key: string; value: string }[];
    highlights: { title: string; desc: string }[];
  };
  skills: {
    label: string;
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
    label: string;
    title: string;
    description: string;
    filters: { id: string; label: string }[];
    featuredLabel: string;
    liveLabel: string;
    filterLabel: string;
    codeLabel: string;
    demoLabel: string;
    outcomesLabel: string;
    upcomingTitle: string;
    upcomingDesc: string;
    upcomingItems: string[];
    emptyTitle: string;
  };
  education: {
    label: string;
    title: string;
    description: string;
  };
  contact: {
    label: string;
    title: string;
    description: string;
    emailTitle: string;
    emailHint: string;
    githubTitle: string;
    githubHint: string;
    primaryCta: string;
    cvLabel: string;
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
