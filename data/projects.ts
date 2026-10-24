export type ProjectCategory = "data" | "web" | "graphics";

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: ProjectCategory;
  role: string;
  description: string;
  outcomes: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  imageAlt: string;
  featured: boolean;
  live?: boolean;
};

export const projects: Project[] = [
  {
    id: 2,
    slug: "reksa",
    title: "REKSA — Reservasi & Kerusakan Sarana Akademik",
    category: "web",
    role: "Team — damage reporting, QA & deployment",
    description:
      "Campus facility platform that unifies room reservations and damage reporting in one flow — from photo-backed reports and officer queues to approved, tracked bookings.",
    outcomes: [
      "Built the damage-report flow: photo upload to private storage and full status tracking",
      "Ran QA across user, officer, and admin flows; found and fixed bugs before release",
      "Set up the live deployment: Docker Compose (nginx, app, MySQL) behind Cloudflare Tunnel",
    ],
    techStack: ["Laravel 13", "PHP 8.3", "MySQL 8", "Blade", "Tailwind CSS 4", "Docker"],
    githubUrl: "https://github.com/muhffikkri/room-reservation-system",
    demoUrl: "https://reksa.opankcs.com",
    image: "/reksa.png",
    imageAlt: "REKSA login page — campus facility reservation platform",
    featured: true,
    live: true,
  },
  {
    id: 3,
    slug: "jara",
    title: "JARA — Advanced Todo List",
    category: "web",
    role: "Team — QA & deployment",
    description:
      "Team-built task manager for personal and collaborative work: lists with owners and members, priorities and deadlines, completion toggles, and per-list progress.",
    outcomes: [
      "Verified core flows end to end (auth, lists, tasks, members) before release",
      "Hunted bugs across list, task, and member flows as part of QA",
      "Deployed and kept the app live with Docker + Cloudflare Tunnel",
    ],
    techStack: ["Laravel 13", "PHP 8.5", "MySQL", "Blade", "Tailwind CSS 4", "Playwright"],
    githubUrl: "https://github.com/muhffikkri/jara-advanced-todo-list",
    demoUrl: "https://jara.opankcs.com",
    image: "/jara.png",
    imageAlt: "JARA landing page — advanced todo list",
    featured: false,
    live: true,
  },
  {
    id: 4,
    slug: "kms-kopi",
    title: "KMS Kopi — Knowledge Management System",
    category: "web",
    role: "Full-stack developer (solo)",
    description:
      "Knowledge management app for small coffee-shop businesses: store, search, and reuse operational knowledge (recipes, SOPs, suppliers, complaints), with stock and sales logging plus an owner validation flow.",
    outcomes: [
      "Designed the schema: 8 tables plus aggregation views for low stock, peak hours, and best sellers",
      "Built owner and employee roles with PIN login and a knowledge validation workflow",
      "Shipped it live on a self-hosted domain (Docker + Cloudflare Tunnel)",
    ],
    techStack: ["Flask", "Python", "MySQL 8", "Jinja", "JavaScript", "Docker"],
    githubUrl: "https://github.com/NauvalXQF/KMS-KopiRevisi",
    demoUrl: "https://kms.opankcs.com",
    image: "/kms-kopi.png",
    imageAlt: "KMS Kopi dashboard — coffee shop knowledge management",
    featured: false,
    live: true,
  },
  {
    id: 1,
    slug: "kabah-coin-quest",
    title: "Ka'bah Coin Quest",
    category: "graphics",
    role: "Developer — gameplay & 3D rendering",
    description:
      "A 3D interactive game built with C++ and OpenGL. Players navigate a Ka'bah environment and collect coins, with real-time rendering, lighting, and collision logic.",
    outcomes: [
      "Real-time 3D rendering and camera control with OpenGL",
      "Game loop, input handling, and simple collision detection",
      "Working in a team codebase with Git",
    ],
    techStack: ["C++", "OpenGL", "GLUT", "Git"],
    githubUrl: "https://github.com/NauvalXQF",
    image: "/kabah-coin-quest.png",
    imageAlt: "Ka'bah Coin Quest — 3D game screenshot",
    featured: false,
  },
];
