export const profile = {
  name: "Sven van Bugnum",
  role: "Full-Stack Developer / Engineer",
  location: "Netherlands",
  tagline:
    "I build full-stack web applications and high-performance Minecraft plugins, bridging the gap between game server backends, databases, and user-facing front-ends.",
  availability: "Mon–Fri, 5PM – 11PM. Weekends varying.",
  email: "svenvanbugnum@outlook.com",
  github: "https://github.com/officialMHF",
  discord: "officialMHF",
};

export const about = [
  "I'm Sven van Bugnum, a Software Developer finishing up my studies. I'm passionate about building full-stack web applications and high-performance Minecraft plugins, bridging the gap between game server backends, databases, and user-facing front-ends.",
  "My focus is on backend logic, database management, and modern front-end web development. I work with Java, databases, and web frameworks, and I've built everything from complex in-game mechanics and server plugins to personal tools and full-stack side projects. I'm looking for student jobs in software development (backend, front-end, or full-stack) and open to freelance work when it fits my schedule.",
  "When I'm not studying or coding, I like exploring new technologies, optimizing game server ecosystems, and working on creative side projects.",
];

export const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "15+", label: "Projects" },
  { value: "9+", label: "Technologies" },
];

export type Skill = { name: string; slug: string; invert?: boolean };

export const skills: { category: string; items: Skill[] }[] = [
  {
    category: "Backend",
    items: [
      { name: "Python", slug: "python" },
      { name: "Java", slug: "java" },
      { name: "Kotlin", slug: "kotlin" },
      { name: "REST APIs", slug: "rest" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", slug: "mongodb" },
      { name: "MySQL", slug: "mysql" },
      { name: "SQLite", slug: "sqlite" },
    ],
  },
  {
    category: "Front-End",
    items: [
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css3" },
      { name: "JavaScript", slug: "javascript" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Next.js", slug: "nextjs", invert: true },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", slug: "git" },
      { name: "VS Code", slug: "vscode" },
    ],
  },
];

export type ProjectStat = { value: string; label: string };

export type Project = {
  title: string;
  tagline: string;
  icon: "fishing" | "racing";
  banner?: string;
  logo?: string;
  pixelLogo?: boolean;
  description: string[];
  stats: ProjectStat[];
  tech: string[];
  link: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    title: "Star Fishing",
    tagline: "Advanced Minecraft Network",
    icon: "fishing",
    banner: "/starfishingbanner.png",
    logo: "/starfishinglogo.png",
    pixelLogo: true,
    description: [
      "Leading development of a comprehensive Minecraft network built around a deep, custom fishing system — unique catch mechanics, rarities, and player progression that give the server its own identity. Backed by custom 3D models and resource packs for a fully bespoke look and feel.",
      "Engineered for very high-grade server performance: optimized event handling, asynchronous data access, and clean module boundaries keep gameplay smooth under load. The core is written in Kotlin, with TypeScript powering the supporting web tooling.",
    ],
    stats: [
      { value: "Active", label: "Status" },
      { value: "Custom", label: "Models" },
      { value: "High", label: "Performance" },
    ],
    tech: ["Kotlin", "TypeScript", "Minecraft", "Game Development"],
    link: "",
    linkLabel: "View Project",
  },
  {
    title: "F1 Website",
    tagline: "Live Formula 1 Statistics",
    icon: "racing",
    banner: "/f1-banner.jpg",
    logo: "/f1logo.png",
    description: [
      "A full-featured Formula 1 companion site that pulls live data through custom API keys to present a complete view of the current season — race calendars, results, and driver & constructor standings, all kept up to date automatically.",
      "Also dives into historical seasons so you can explore past championships and compare statistics, wrapped in a clean, modern, responsive interface built with vanilla HTML, CSS, and JavaScript.",
    ],
    stats: [
      { value: "Live", label: "Data" },
      { value: "All", label: "Seasons" },
      { value: "Modern", label: "Interface" },
    ],
    tech: ["HTML/CSS", "JavaScript", "REST API"],
    link: "",
    linkLabel: "View Project",
  },
];

export type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  description: string;
  icon: "education" | "code" | "server";
};

export const experience: ExperienceItem[] = [
  {
    title: "Software Development Studies",
    org: "Currently finishing studies",
    period: "Present",
    description:
      "Finishing up a software development education while building full-stack web applications and Minecraft plugins as hands-on side projects.",
    icon: "education",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
