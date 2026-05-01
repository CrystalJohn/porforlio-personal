export const PROJECTS = [
  {
    id: "frontend-daily",
    category: "Learning Dashboard",
    title: "Frontend Daily — 40-day Roadmap Tracker",
    description: "40-day roadmap tracker với progress dashboard, learning curve chart, và daily checklist. Built với Next.js 16 App Router + Recharts.",
    tech: ["Next.js", "TypeScript", "Recharts", "localStorage"],
    href: "/dashboard",
    internal: true,
    year: "2026",
    status: "Live",
  },
  {
    id: "real-time-food-delivery",
    category: "Full-stack App",
    title: "Real-Time Food Delivery — HuggingVibe",
    description: "Food delivery application with real-time ordering flow, restaurant/product browsing, cart experience, and delivery-oriented UI interactions.",
    tech: ["Next.js", "React", "TypeScript", "Axios", "OpenFreeMap", "Framer Motion", "react-toastify"],
    href: "https://github.com/CrystalJohn/CrystalJohn-Real-Time-Food-Delivery-HuggingVibe",
    videoSrc: "/Screen%20Recording%202026-04-27%20RTFDT.mp4",
    internal: true,
    year: "2026",
    status: "Live",
  },
  {
    id: "js-async",
    category: "JavaScript",
    title: "Async / Event Loop Deep Dive",
    description: "Visual demo về event loop, Promise chain, async/await, và AbortController pattern để clean up fetch khi unmount.",
    tech: ["JavaScript", "Promises", "AbortController"],
    href: "/daily/7",
    internal: true,
    year: "2026",
    status: "In Progress",
  },
  {
    id: "react-components",
    category: "React",
    title: "Component Architecture",
    description: "Xây dựng component system với props, controlled/uncontrolled state, custom hooks, và performance optimization với useMemo/useCallback.",
    tech: ["React 19", "Hooks", "TypeScript"],
    href: "/daily/11",
    internal: true,
    year: "2026",
    status: "Coming Soon",
  },
];

export const STATUS_STYLE: Record<string, { bg: string; color: string; dot: string }> = {
  "Live": { bg: "rgba(29,129,2,0.15)", color: "#4ade80", dot: "#1d8102" },
  "In Progress": { bg: "rgba(255,153,0,0.12)", color: "#ff9900", dot: "#ff9900" },
  "Coming Soon": { bg: "rgba(255,255,255,0.05)", color: "#666", dot: "#444" },
};

export const EXPERIENCE = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Tech Company",
    period: "2023 - Present",
    description: "Developed web.hr landing page which is utilized in 25,000+ companies. Created meaningful and delightful digital products that create an equilibrium between user needs and business goals."
  },
  {
    id: 2,
    role: "UI/UX Designer",
    company: "Freelance",
    period: "2020 - 2023",
    description: "Functioning in the industry for 3+ years now as a self-taught designer. Bridging the gap between conceptual design and technical implementation."
  }
];

export const SKILLS = [
  "TypeScript", "React", "Next.js", "Tailwind CSS", 
  "HTML5", "CSS3", "JavaScript (ES6+)", "Figma", 
  "UI/UX Design", "Git", "Responsive Design", "Performance Optimization"
];

export const SOCIALS = [
  { name: "LinkedIn", href: "#" },
  { name: "Behance", href: "#" },
  { name: "Dribbble", href: "#" },
  { name: "Instagram", href: "#" }
];

