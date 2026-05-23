export type Hackathon = {
  id: string;
  name: string;
  date: string;
  location: string;
  prizes: string;
  tags: string[];
  applicants: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  theme: string;
};

export type Teammate = {
  id: string;
  name: string;
  school: string;
  role: string;
  skills: string[];
  interests: string[];
  experience: "Beginner" | "Intermediate" | "Advanced";
  looking: boolean;
};

export const hackathons: Hackathon[] = [
  {
    id: "neon-build",
    name: "Neon Build Weekend",
    date: "June 14-16, 2026",
    location: "Toronto, ON",
    prizes: "$12,000",
    tags: ["AI", "Beginner-friendly", "Product"],
    applicants: 420,
    difficulty: "Beginner",
    theme: "Build an AI tool students would actually use.",
  },
  {
    id: "medhacks-north",
    name: "MedHacks North",
    date: "July 5-7, 2026",
    location: "Hybrid",
    prizes: "$18,500",
    tags: ["Healthcare", "Research", "Data"],
    applicants: 310,
    difficulty: "Intermediate",
    theme: "Prototype better healthcare access and diagnostics.",
  },
  {
    id: "fintech-sprint",
    name: "FinTech Sprint",
    date: "August 2-4, 2026",
    location: "New York, NY",
    prizes: "$25,000",
    tags: ["Finance", "APIs", "Security"],
    applicants: 560,
    difficulty: "Advanced",
    theme: "Create tools for safer, smarter personal finance.",
  },
  {
    id: "climate-hack",
    name: "Climate Hack Lab",
    date: "September 11-13, 2026",
    location: "Waterloo, ON",
    prizes: "$9,000",
    tags: ["Climate", "Hardware", "Social impact"],
    applicants: 260,
    difficulty: "Intermediate",
    theme: "Turn sustainability data into action.",
  },
];

export const teammates: Teammate[] = [
  {
    id: "maya",
    name: "Maya Chen",
    school: "University of Waterloo",
    role: "Full-stack developer",
    skills: ["React", "Supabase", "Python"],
    interests: ["AI", "Healthcare"],
    experience: "Intermediate",
    looking: true,
  },
  {
    id: "arjun",
    name: "Arjun Patel",
    school: "Western University",
    role: "Product designer",
    skills: ["Figma", "UX Research", "Pitching"],
    interests: ["Finance", "Product"],
    experience: "Beginner",
    looking: true,
  },
  {
    id: "sofia",
    name: "Sofia Ramirez",
    school: "McMaster University",
    role: "Data scientist",
    skills: ["Python", "ML", "Data Viz"],
    interests: ["Climate", "Healthcare"],
    experience: "Advanced",
    looking: false,
  },
  {
    id: "eli",
    name: "Eli Brooks",
    school: "Toronto Metropolitan University",
    role: "Backend developer",
    skills: ["Node.js", "Postgres", "APIs"],
    interests: ["Finance", "Security"],
    experience: "Intermediate",
    looking: true,
  },
];

export const stats = [
  { label: "Hackathons tracked", value: "48" },
  { label: "Students matching", value: "1.2k" },
  { label: "Open team spots", value: "176" },
];
