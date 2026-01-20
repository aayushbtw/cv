import { CertificationsSection } from "@/components/cv/certifications-section";
import { EducationSection } from "@/components/cv/education-section";
import { ProjectsSection } from "@/components/cv/projects-section";
import { SkillsSection } from "@/components/cv/skills-section";
import { WorkExperienceSection } from "@/components/cv/work-experience-section";

const workExp = {
  title: "Work Experience",
  body: {
    Component: WorkExperienceSection,
    content: [
      {
        workplace: "Netision Technology LLP",
        designation: "Full-Stack Engineer",
        date: "2024 — Present",
        projects: [
          {
            name: "Nexus — Multi-Agent AI Platform",
            description:
              "Platform that provides a unified interface to interact with AI agents developed by Netision.",
            points: [
              "Led the UI/UX design of the platform, defining interaction patterns for multi-agent workflows",
              "Architected and built the frontend application, owning the end-to-end user experience",
              "Drove frontend technical and product decisions, shaping architecture, state management, and UI behavior",
            ],
            stack: ["NextJS", "Convex", "ShadCN"],
          },
          {
            name: "Navtics — Sales Forecast & Analysis Platform",
            description:
              "Sales forecasting and analysis platform supported by an internal data management dashboard used to feed structured business data into downstream analytics.",
            points: [
              "Designed the UI/UX for the internal dashboard used by teams to manage sales and operational data",
              "Built the internal frontend application for structured data entry, validation, and management",
              "Owned frontend architecture and design decisions for the internal tooling used across the organization",
            ],
            stack: ["NextJS", "Supabase", "Zod", "ShadCN"],
          },
          {
            name: "Menu Mix — Restaurant Menu Management System",
            description:
              "Internal application used by restaurants to manage menu items, pricing, nutritional information, and multi-store configurations.",
            points: [
              "Designed and built the application in collaboration with one other engineer",
              "Worked directly with the client to gather requirements and translate them into product features",
              "Implemented workflows for managing menu items, pricing, calories, and store-specific variations",
            ],
            stack: ["Zoho Creator", "Deluge"],
          },
          {
            name: "Company Landing Website",
            description:
              "Marketing and informational website built to represent the company's services and offerings.",
            points: [
              "Independently implemented the website based on provided UI designs",
              "Worked directly with the client to clarify requirements and iterate on feedback",
              "Owned the project end-to-end, from development through deployment",
            ],
            stack: ["NextJS", "ShadCN", "Framer Motion"],
          },
        ],
      },
    ],
  },
};

const skills = {
  title: "Skills",
  body: {
    Component: SkillsSection,
    content: [
      {
        title: "Languages",
        description: "Go, PHP, Python, TypeScript, JavaScript, HTML, CSS",
      },
      {
        title: "Tools & Frameworks",
        description:
          "Node.js, React.js, Next.js, Svelte.js, Astro.js, Prisma, ShadCN, RadixUI, MeltUI, TailwindCSS",
      },
      {
        title: "Technologies",
        description:
          "MySQL, PostgreSQL Mongo, Convex, Supabase, Git, Docker, Linux, Zoho Creator, Deluge, Cloudflare Workers",
      },
      {
        title: "Core Stack",
        description: "Node.js, Next.js, Prisma, PostgreSQL, ShadCN",
      },
    ],
  },
};

const education = {
  title: "Education",
  body: {
    Component: EducationSection,
    content: [
      {
        title: "Bennett University",
        description: "BCA",
        date: "2022 — 2025",
      },
      {
        title: "Sanskar The Co-Educational School",
        description: "XII Commerce",
        date: "2021 — 2022",
      },
      {
        title: "Delhi Public School Rajnagar",
        description: "X",
        date: "2019 — 2020",
      },
    ],
  },
};

const projects = {
  title: "Projects",
  body: {
    Component: ProjectsSection,
    content: [
      {
        title: "Subscription Management System",
        description:
          "Subscription-based app with user authentication and an admin dashboard for managing users and subscription data.",
        date: "2025",
        stack: ["SvelteJS", "Prisma", "PostgreSQL"],
      },

      {
        title: "Monit",
        description:
          "Server monitoring tool to fetch and display system stats over SSH",
        date: "2024",
        stack: ["GoLang", "Charm", "Bubbletea", "Wish"],
      },
      {
        title: "tt",
        description: "Terminal-based typing speed and accuracy test",
        date: "2024",
        stack: ["GoLang", "Bubbletea"],
      },
      {
        title: "z",
        description:
          "Superfast CLI tool for string encoding and decoding operations",
        date: "2024",
        stack: ["GoLang", "urfave/cli"],
      },
    ],
  },
};

const certifications = {
  title: "Certifications",
  body: {
    Component: CertificationsSection,
    content: [
      {
        title: "Zoho Creator Certified Developer — Associate",
        description:
          "Certification validating proficiency in building applications using Zoho Creator and Deluge.",
        date: "Apr 2025",
      },
      {
        title: "AWS Academy Graduate — Cloud Foundations",
        description:
          "Completed foundational coursework covering core AWS services, cloud concepts, and basic cloud architecture.",
        date: "Nov 2023",
      },
      {
        title: "Foundations of User Experience (UX) Design",
        description:
          "Completed a UX fundamentals course authorized by Google and offered through Coursera.",
        date: "Oct 2023",
      },
      {
        title: "Certificate of Appreciation — Responsible Security Disclosure",
        description:
          "Recognized by Intel Corporation for responsibly reporting a security issue through Intel’s responsible disclosure program.",
        date: "Feb 2017",
      },
    ],
  },
};

export const cv = {
  firstName: "AAYUSH",
  lastName: "AGARWAL",
  designation: "Full-Stack Engineer",
  description:
    "Self-taught programmer and explorer with a deep fascination for web technologies and security. I build tools and systems that feel simple, useful, and reliable, with thoughtful attention to clarity and user experience.",
  sections: [skills, workExp, projects, education, certifications],
};
