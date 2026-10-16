export type SkillGroup = "data" | "web" | "tools";
export type SkillLevel = "intermediate" | "familiar" | "learning";

export type Skill = {
  name: string;
  group: SkillGroup;
  level: SkillLevel;
};

export const skills: Skill[] = [
  // Data & Programming — daily drivers
  { name: "Python", group: "data", level: "intermediate" },
  { name: "SQL", group: "data", level: "intermediate" },
  { name: "C", group: "data", level: "familiar" },
  { name: "C++", group: "data", level: "familiar" },
  { name: "Java", group: "data", level: "familiar" },
  { name: "Pandas", group: "data", level: "learning" },
  { name: "Data Visualization", group: "data", level: "learning" },
  // Web & Building
  { name: "PHP", group: "web", level: "familiar" },
  { name: "Laravel", group: "web", level: "familiar" },
  { name: "MySQL", group: "web", level: "familiar" },
  { name: "Next.js", group: "web", level: "familiar" },
  { name: "Tailwind CSS", group: "web", level: "familiar" },
  { name: "Flask", group: "web", level: "familiar" },
  // Tools & Workflow
  { name: "Git", group: "tools", level: "intermediate" },
  { name: "Docker", group: "tools", level: "familiar" },
  { name: "Self-hosting (Linux)", group: "tools", level: "familiar" },
  { name: "Figma", group: "tools", level: "familiar" },
  { name: "Cisco Packet Tracer", group: "tools", level: "familiar" },
];
