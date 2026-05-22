export interface ExperienceItem {
  title: string;
  company?: string;
  employmentType?: string;
  duration: string;
  description: string;
  years: string;
}

export const experiencesData: ExperienceItem[] = [
  {
    title: "Research Intern at IDSS Udinus",
    duration: "September 2025 – Present",
    description:
      "Conducting comparative analyses on AI capabilities, managing research data, and collaborating on intellectual property (HKI) documentation for advanced intelligent systems.",
    years: "2025 – Now",
  },
  {
    title: "Intern UI/UX Designer & Frontend Developer at BTIK Udinus",
    duration: "June 2025 – January 2026",
    description:
      "Designed and developed modern responsive web portals and frontend interfaces for Dian Nuswantoro University's information technology bureau.",
    years: "2025 – 2026",
  },
  {
    title: "Freelance UI/UX Designer & Frontend Developer",
    duration: "January 2024 – Present",
    description:
      "Crafting high-fidelity mobile application interfaces and clean landing pages for clients, showcasing aesthetic and user-centered design concepts.",
    years: "2024 – Now",
  },
  {
    title: "UI/UX Design Bootcamper at Codepolitan",
    duration: "June 2024 – August 2024",
    description:
      "Studied and implemented visual design principles, human-computer interaction patterns, grid systems, and collaborative developer-design workflows using Figma.",
    years: "2024",
  },
  {
    title: "Web Development Student at Universitas Dian Nuswantoro",
    duration: "September 2023 – Present",
    description:
      "Building foundational skills in web engineering, database architecture, and computer science concepts, developing full-stack web solutions like CodeIgniter e-commerce applications.",
    years: "2023 – Now",
  },
];
