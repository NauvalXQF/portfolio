export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: string;
  githubUrl?: string;
  demoUrl?: string;
  imageAlt: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Ka'bah Coin Quest",
    description:
      "A 3D interactive game built with C++ and OpenGL where players collect coins around the Ka'bah environment.",
    longDescription:
      "Ka'bah Coin Quest is a 3D game developed using C++ and OpenGL. The game features a 3D-rendered Ka'bah environment where the player navigates and collects coins. Built as a computer graphics project, it demonstrates real-time rendering, 3D object manipulation, lighting, and interactive gameplay mechanics.",
    techStack: ["C++", "OpenGL", "GLUT", "Computer Graphics"],
    category: "Game / Graphics",
    githubUrl: "https://github.com/NauvalQXQF",
    imageAlt: "Ka'bah Coin Quest 3D Game Screenshot",
    featured: true,
  },
];
