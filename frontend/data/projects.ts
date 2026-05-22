export interface Project {
  index: string;
  title: string;
  slug: string;
  category: string;
  year: string;
  imageSrc?: string;
  href?: string;
  techStack?: string[];
  figmaLink?: string;
  liveLink?: string;
  description?: string;
}

export const projectsData: Project[] = [
  {
    index: "01",
    title: "Dinus.ac.id",
    slug: "dinus-ac-id",
    category: "UI/UX Design",
    year: "2026",
    techStack: ["Figma", "Astro JS", "Wordpress"],
    figmaLink: "https://figma.com",
    liveLink: "https://dinus.ac.id",
    description:
      "I'm Dhion, a UI/UX Designer & Frontend Developer who transforms ideas into intuitive and impactful digital experiences.",
  },
  {
    index: "02",
    title: "EcoSphere Commerce Platform",
    slug: "ecosphere-commerce-platform",
    category: "Frontend Development",
    year: "2026",
    techStack: ["React", "TailwindCSS", "Next.js", "GraphQL"],
    figmaLink: "https://figma.com",
    liveLink: "https://ecosphere.example.com",
    description:
      "EcoSphere is a premium e-commerce platform built for sustainable brands, focusing on dynamic user experience, rapid load times, and custom checkout flows.",
  },
  {
    index: "03",
    title: "Brewed & Co. Coffee App",
    slug: "brewed-co-coffee-app",
    category: "UI/UX Design",
    year: "2025",
    techStack: ["Figma", "Adobe Illustrator", "Prototyping"],
    figmaLink: "https://figma.com",
    description:
      "Brewed & Co. is a mobile application design crafted for premium coffee shops, featuring animations, personalized ordering, and loyalty rewards.",
  },
  {
    index: "04",
    title: "Veloce FinTech Dashboard",
    slug: "veloce-fintech-dashboard",
    category: "Frontend Development",
    year: "2025",
    techStack: ["TypeScript", "Next.js", "ChartJS", "TailwindCSS"],
    liveLink: "https://veloce.example.com",
    description:
      "Veloce is a sleek financial analytics dashboard built to process and visualize real-time banking transactions and financial assets.",
  },
  {
    index: "05",
    title: "NomadQuest Travel Agency",
    slug: "nomadquest-travel-agency",
    category: "UI/UX Design",
    year: "2025",
    techStack: ["Figma", "User Research", "Wireframing"],
    figmaLink: "https://figma.com",
    description:
      "NomadQuest is a responsive website layout optimized for adventure travelers seeking custom itineraries and local travel guides.",
  },
  {
    index: "06",
    title: "Minimalist Portfolio 2026",
    slug: "minimalist-portfolio-2026",
    category: "Frontend Development",
    year: "2026",
    techStack: ["React 19", "Next.js 16", "Framer Motion", "TailwindCSS v4"],
    liveLink: "https://dhion-portfolio.example.com",
    description:
      "My own personal portfolio design and codebase, featuring editorial layout rules, large typography, and sleek page navigation transitions.",
  },
  {
    index: "07",
    title: "Aura Smart Home Interface",
    slug: "aura-smart-home-interface",
    category: "UI/UX Design",
    year: "2026",
    techStack: ["Figma", "UI Design", "Dark Mode Layouts"],
    figmaLink: "https://figma.com",
  },
  {
    index: "08",
    title: "FlowTask Management Tool",
    slug: "flowtask-management-tool",
    category: "Frontend Development",
    year: "2025",
    techStack: ["React", "Zustand", "Dnd-kit", "CSS Grid"],
  },
  {
    index: "09",
    title: "CarePulse Telemedicine App",
    slug: "carepulse-telemedicine-app",
    category: "UI/UX Design",
    year: "2025",
    techStack: ["Figma", "Design Systems", "Mobile App"],
  },
  {
    index: "10",
    title: "Apex SaaS Analytics Panel",
    slug: "apex-saas-analytics-panel",
    category: "Frontend Development",
    year: "2026",
    techStack: ["Next.js", "Recharts", "Radix UI"],
  },
  {
    index: "11",
    title: "Hearthstone Real Estate",
    slug: "hearthstone-real-estate",
    category: "UI/UX Design",
    year: "2025",
    techStack: ["Figma", "Editorial Layout"],
  },
  {
    index: "12",
    title: "PulseFit Tracker Mobile",
    slug: "pulsefit-tracker-mobile",
    category: "UI/UX Design",
    year: "2026",
    techStack: ["Figma", "Mobile UI", "Interaction Design"],
  },
  {
    index: "13",
    title: "BiteDash Food Delivery",
    slug: "bitedash-food-delivery",
    category: "Frontend Development",
    year: "2026",
    techStack: ["React Native", "Expo", "Google Maps API"],
  },
  {
    index: "14",
    title: "EduNexus Learning Platform",
    slug: "edunexus-learning-platform",
    category: "UI/UX Design",
    year: "2025",
    techStack: ["Figma", "Information Architecture"],
  },
  {
    index: "15",
    title: "CoinWaves Crypto Wallet",
    slug: "coinwaves-crypto-wallet",
    category: "Frontend Development",
    year: "2026",
    techStack: ["TypeScript", "Web3.js", "TailwindCSS"],
  },
  {
    index: "16",
    title: "GatherUp Event Organizer",
    slug: "gatherup-event-organizer",
    category: "UI/UX Design",
    year: "2025",
    techStack: ["Figma", "Visual Identity"],
  },
  {
    index: "17",
    title: "HirePath Job Search Portal",
    slug: "hirepath-job-search-portal",
    category: "Frontend Development",
    year: "2025",
    techStack: ["React", "PostgreSQL", "Express"],
  },
  {
    index: "18",
    title: "SkyLine Interactive Weather",
    slug: "skyline-interactive-weather",
    category: "Frontend Development",
    year: "2026",
    techStack: ["HTML5 Canvas", "Weather API", "CSS Animations"],
  },
];
