import { Technologies } from "@/data/technologies";

export type ResumeEvidence = {
  title: string;
  role: string;
  company?: string;
  period: string;
  location?: string;
  type: "experience" | "project" | "education";
  summary: string;
  technologies: Technologies[];
  bullets: string[];
  links?: { label: string; href: string }[];
};

export type ResumeProfile = {
  name: string;
  headline: string;
  location: string;
  email?: string;
  links: { label: string; href: string }[];
  bio: string;
  languages: string[];
  evidence: ResumeEvidence[];
};

export const resumeProfile: ResumeProfile = {
  name: "Paweł Drojecki",
  headline: "Frontend / Fullstack / Product Developer",
  location: "Poznań, Poland / remote",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pawel-drojecki/",
    },
    {
      label: "Portfolio",
      href: "https://www.drojecki.pro/portfolio",
    },
  ],
  bio:
    "I design and build web, mobile and product applications from interface to backend. I most often work with React, Next.js, React Native, Nest.js, Node.js and TypeScript, combining implementation with product thinking, integrations, analytics and delivery ownership.",
  languages: ["Polish: native", "English: professional working proficiency"],
  evidence: [
    {
      title: "CleanStrategy",
      role: "Mobile developer / product builder",
      period: "Jan 2024 - present",
      type: "project",
      summary:
        "Mobile/web product that helps households organize chores, schedules and responsibilities.",
      technologies: [
        Technologies.REACT_NATIVE,
        Technologies.EXPO,
        Technologies.TYPESCRIPT,
        Technologies.REACT,
        Technologies.NEST_JS,
        Technologies.MONGODB,
        Technologies.TAILWIND_CSS,
      ],
      bullets: [
        "Designed and developed a React Native / Expo product with task flows, schedules and household responsibility logic.",
        "Built the supporting Nest.js and MongoDB backend so mobile and web clients can evolve in parallel.",
        "Owned product logic and key user paths, with a focus on fast iteration and practical everyday usage.",
      ],
      links: [{ label: "Case study", href: "/projekty/cleanstrategy/" }],
    },
    {
      title: "The Royal Mint",
      role: "Frontend Web Developer",
      company: "NoA Ignite Poland",
      period: "Jul 2024 - present",
      location: "Remote",
      type: "experience",
      summary:
        "Frontend work for an enterprise e-commerce platform for the precious metals market.",
      technologies: [
        Technologies.REACT,
        Technologies.TYPESCRIPT,
        Technologies.BOOTSTRAP,
        Technologies.AZURE,
        Technologies.AUTH0,
        Technologies.GOOGLE_ANALYTICS,
        Technologies.ECOMMERCE,
      ],
      bullets: [
        "Developed and maintained React and TypeScript frontend features in a legacy enterprise e-commerce codebase.",
        "Debugged, optimized and modernized UI code while keeping existing commercial flows stable.",
        "Supported Google Analytics work and frontend improvements for product and purchase experiences.",
      ],
      links: [{ label: "Case study", href: "/projekty/royal-mint/" }],
    },
    {
      title: "Swarmcheck",
      role: "Fullstack Developer",
      company: "Swarmcheck",
      period: "Jun 2021 - Jul 2024",
      location: "Remote",
      type: "experience",
      summary:
        "Web application for structured argumentation, fact-checking and data work.",
      technologies: [
        Technologies.REACT,
        Technologies.NODE_JS,
        Technologies.EXPRESS,
        Technologies.D3_JS,
        Technologies.AZURE,
        Technologies.RBAC,
      ],
      bullets: [
        "Implemented a custom RBAC authorization system and backend endpoints for controlled data workflows.",
        "Built React interfaces and D3.js graph visualizations for exploring relationships between arguments.",
        "Worked across frontend and backend responsibilities in a product with data, access and collaboration concerns.",
      ],
      links: [{ label: "Case study", href: "/projekty/swarmcheck/" }],
    },
    {
      title: "Moment Studio",
      role: "Fullstack developer",
      period: "Jan 2024",
      type: "project",
      summary:
        "Complete e-commerce implementation combining brand presentation, products, payments and backend workflows.",
      technologies: [
        Technologies.REACT,
        Technologies.NEST_JS,
        Technologies.MONGODB,
        Technologies.STRIPE,
        Technologies.RESEND,
        Technologies.JAVASCRIPT,
        Technologies.TAILWIND_CSS,
        Technologies.ECOMMERCE,
      ],
      bullets: [
        "Built the frontend, Nest.js backend, MongoDB product model, Stripe payments and transactional email flow.",
        "Translated brand direction into responsive, product-focused commerce interfaces.",
      ],
      links: [{ label: "Case study", href: "/projekty/moment-studio/" }],
    },
    {
      title: "Jambo",
      role: "Frontend developer",
      period: "Apr 2021 - Aug 2021",
      type: "project",
      summary:
        "E-commerce frontend implemented from Figma designs and product requirements.",
      technologies: [
        Technologies.NEXT_JS,
        Technologies.REACT,
        Technologies.JAVASCRIPT,
        Technologies.HTML5,
        Technologies.TAILWIND_CSS,
        Technologies.FIGMA,
        Technologies.ECOMMERCE,
      ],
      bullets: [
        "Translated Figma designs into responsive React/Next.js commerce views.",
        "Prepared project materials and requirements for visual implementation work.",
      ],
      links: [{ label: "Case study", href: "/projekty/jambo/" }],
    },
    {
      title: "Will Code Academy",
      role: "Instructor",
      company: "Will Code Academy",
      period: "Oct 2023 - Aug 2025",
      location: "Remote",
      type: "experience",
      summary:
        "Programming education, mentoring and learning-material work for people learning frontend development.",
      technologies: [
        Technologies.REACT,
        Technologies.JAVASCRIPT,
        Technologies.HTML5,
        Technologies.MENTORING,
        Technologies.PROGRAMMING_TEACHING,
      ],
      bullets: [
        "Led practical programming lessons and mentored beginner developers.",
        "Designed teaching methods that simplify difficult programming concepts.",
      ],
    },
  ],
};
