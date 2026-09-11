export type Skill = {
  name: string;
  category: "language" | "framework" | "tool" | "design";
};

export const skills: Skill[] = [
  // Languages
  { name: "Python", category: "language" },
  { name: "Java", category: "language" },
  { name: "C", category: "language" },
  { name: "C++", category: "language" },
  { name: "PHP", category: "language" },
  { name: "SQL", category: "language" },
  // Frameworks
  { name: "Laravel", category: "framework" },
  { name: "Next.js", category: "framework" },
  // Tools & Others
  { name: "Figma", category: "design" },
  { name: "Cisco Packet Tracer", category: "tool" },
  { name: "Git", category: "tool" },
];
