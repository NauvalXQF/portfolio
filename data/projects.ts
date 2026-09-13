export type ProjectCategory = "data" | "web" | "graphics";

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: ProjectCategory;
  roleEn: string;
  roleId: string;
  descriptionEn: string;
  descriptionId: string;
  outcomesEn: string[];
  outcomesId: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  imageAlt: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "kabah-coin-quest",
    title: "Ka'bah Coin Quest",
    category: "graphics",
    roleEn: "Developer — gameplay & 3D rendering",
    roleId: "Developer — gameplay & rendering 3D",
    descriptionEn:
      "A 3D interactive game built with C++ and OpenGL. Players navigate a Ka'bah environment and collect coins, with real-time rendering, lighting, and collision logic.",
    descriptionId:
      "Game interaktif 3D yang dibangun dengan C++ dan OpenGL. Pemain menjelajahi lingkungan Ka'bah dan mengumpulkan koin, dengan rendering real-time, lighting, dan logika collision.",
    outcomesEn: [
      "Real-time 3D rendering and camera control with OpenGL",
      "Game loop, input handling, and simple collision detection",
      "Working in a team codebase with Git",
    ],
    outcomesId: [
      "Rendering 3D real-time dan kontrol kamera dengan OpenGL",
      "Game loop, input handling, dan deteksi collision sederhana",
      "Bekerja di codebase tim dengan Git",
    ],
    techStack: ["C++", "OpenGL", "GLUT", "Git"],
    githubUrl: "https://github.com/NauvalXQF",
    image: "/kabah-coin-quest.png",
    imageAlt: "Ka'bah Coin Quest — 3D game screenshot",
    featured: true,
  },
];
