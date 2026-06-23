export const profile = {
  name: "Sanketh G",
  role: "Senior Software Engineer",
  focus: "AI Systems",
  location: "Bengaluru, Karnataka",
  email: "sanketh.sura.1@gmail.com",
  phone: "+91 9686274029",
  linkedin: "https://www.linkedin.com/in/sanketh-sura-5b0b90178/",
  github: "https://github.com/sankethsura",
  resume: "/sanketh-resume.pdf",
  available: true,
  tagline:
    "I build high-performance web platforms and the AI workflows that power them.",
  intro:
    "Full-stack developer with 3+ years shipping production-grade web applications on the MERN stack and Next.js — and integrating LLM-driven features into systems that serve over a million users a month.",
};

export const stats = [
  { value: 3, suffix: "+", label: "Years building for production" },
  { value: 1, suffix: "M+", label: "Monthly users served" },
  { value: 10, suffix: "k+", label: "AI-generated pages shipped" },
  { value: 4, suffix: "+", label: "Platform integrations led" },
];

export const about = [
  "I specialize in architecting scalable front-end platforms with Next.js and Tailwind CSS — using SSR and SSG to make AI-generated content fast, SEO-friendly, and reliably indexable.",
  "On the backend, I design Node.js services that orchestrate AI-assisted workflows: LLM integrations, schema validation, data normalization, and multi-system automation deployed on AWS.",
  "Now a Senior Software Engineer at YuVerse — a last-mile enterprise AI company building production AI for banking and financial services. Previously at Expertia AI, I helped build an AI-powered hiring platform end to end.",
];

export const principles = [
  {
    n: "01",
    title: "Ship production-grade",
    body: "Code that survives real traffic. I build for reliability and scale — systems that have served 1M+ users a month, not demos that fall over in production.",
  },
  {
    n: "02",
    title: "AI-first, not bolted on",
    body: "I design products around LLMs and automation from the ground up — orchestration, schema validation, and guardrails that make AI dependable in the real world.",
  },
  {
    n: "03",
    title: "Performance & SEO obsessed",
    body: "Fast by default. SSR/SSG, Core Web Vitals, and search visibility are first-class concerns — because speed and discoverability drive real business outcomes.",
  },
  {
    n: "04",
    title: "Iterate from real usage",
    body: "Ship a focused first version, learn from actual users and data, then expand. I'd rather validate the core than over-build features nobody asked for.",
  },
];

export const clients = [
  "Expertia AI",
  "YuVerse",
  "Reliance Industries",
  "Naukri.com",
  "ZingHR",
  "Ola Krutrim",
];

export const education = {
  degree: "Bachelor of Civil Engineering",
  school: "JNNCE, Shimoga",
  period: "2014 — 2018",
  pivot: [
    "I started out in Civil Engineering — but found my craft in code.",
    "Self-taught across the MERN stack, Next.js, and applied AI, I turned curiosity into a career building production systems used by millions. The engineering mindset stayed; the medium changed.",
  ],
};

export const skills = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "SSR / SSG",
      "Component Architecture",
      "Core Web Vitals",
      "SEO Optimization",
    ],
  },
  {
    title: "AI & Automation",
    items: [
      "LLM Integration (OpenAI / Claude)",
      "Prompt Engineering",
      "LangChain",
      "LangGraph",
      "Pinecone",
      "OpenAI Embeddings",
      "Workflow Automation",
      "MCP Servers",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "JWT Auth",
      "API Design & Optimization",
      "Data Validation",
      "Backend Orchestration",
    ],
  },
  {
    title: "Cloud & Tools",
    items: [
      "AWS (EC2, S3, CloudFront)",
      "Elastic Beanstalk",
      "Amplify",
      "Amazon Bedrock",
      "Docker",
      "CI/CD",
      "Git & GitHub",
      "Postman",
    ],
  },
];

export const experience = [
  {
    company: "YuVerse",
    role: "Senior Software Engineer",
    period: "Apr 2026 — Present",
    current: true,
    summary:
      "Driving organic growth and product experience at a last-mile enterprise AI company for banking and financial services — turning Google search traffic into qualified leads.",
    points: [
      "Leading SEO and organic-growth efforts — improving search visibility to capture more clicks and leads from Google.",
      "Building a unified experience center across YuVerse's product suite, making it easy for visitors to explore products and convert into leads.",
      "Engineering scalable, production-grade front-end systems for the company's enterprise AI products.",
    ],
    stack: ["Next.js", "SEO", "SSR / SSG", "Core Web Vitals", "Node.js", "AWS"],
  },
  {
    company: "Expertia AI",
    role: "Full-Stack Developer — AI Systems",
    period: "Jan 2023 — Apr 2026",
    summary:
      "Built an AI-powered hiring platform end to end — from a scalable design system to backend orchestration and applied LLM workflows.",
    points: [
      "Built and maintained a scalable design system standardizing UI across recruiter and ATS workflows.",
      "Shipped responsive, AI-ready interfaces in Next.js with SSR/SSG for AI-generated job and candidate content.",
      "Designed data-rich ATS dashboards focused on usability and actionable insights.",
      "Orchestrated multi-system hiring workflows and external integrations (Naukri, Reliance, ZingHR).",
      "Engineered AI content pipelines, normalization flows, and a conversational MCP job-posting server.",
    ],
    stack: ["Next.js", "Node.js", "MongoDB", "AWS", "LangChain", "OpenAI"],
  },
  {
    company: "Freelance — Ola Krutrim",
    role: "Frontend Developer",
    period: "Early Stage",
    summary:
      "Contributed to frontend development in Next.js for Ola Krutrim during the project's initial stage.",
    points: [
      "Built early-stage Next.js frontend foundations for a new AI product.",
    ],
    stack: ["Next.js", "React"],
  },
];

export const featuredProject = {
  index: "01",
  title: "HireMinds",
  tagline: "Interviews on autopilot.",
  url: "hireminds.in",
  href: "https://hireminds.in",
  status: "Live",
  role: "Founder & Full-Stack Engineer",
  description:
    "My own SaaS — an AI-powered hiring platform that automates first-round screening. Recruiters send a single link; candidates record async video, voice, and coding answers; and Claude transcribes and evaluates every response against a structured rubric to deliver instant hire / no-hire reports.",
  highlights: [
    "AI-generated, role-aware questions across MCQ, voice & coding",
    "Async video interviews with automatic transcription & scoring",
    "Structured skill-breakdown reports and candidate pipeline",
    "Built-in proctoring — tab-switch & face monitoring",
  ],
  tags: [
    "Next.js",
    "Node.js / Express",
    "MongoDB",
    "Claude",
    "AWS S3",
    "AssemblyAI",
    "Clerk",
    "Razorpay",
  ],
};

export const projects = [
  {
    index: "02",
    title: "AI Blog Generation Pipeline",
    tagline: "Job data → 10k+ SEO pages",
    description:
      "An AI-driven content pipeline that turned existing job data into 10,000+ SEO-optimized blogs. Rendering and indexing tuned with SSR/SSG so search engines reliably crawl and rank generated pages — driving a measurable lift in Search Console impressions and clicks.",
    tags: ["Next.js", "OpenAI", "SSR/SSG", "SEO"],
    metric: "10k+ pages indexed",
  },
  {
    index: "03",
    title: "Conversational MCP Job Server",
    tagline: "Chat your job into existence",
    description:
      "A chat-based MCP server (beta) that lets recruiters describe job requirements conversationally and publish without traditional forms. Built the orchestration and validation logic that guarantees AI-generated job data conforms to schema before triggering creation APIs.",
    tags: ["MCP", "LLM", "Orchestration", "Validation"],
    status: "Beta",
  },
  {
    index: "04",
    title: "AI ATS Dashboards & Design System",
    tagline: "Usable insight at scale",
    description:
      "Complex, data-rich dashboards for an AI-driven Applicant Tracking System, backed by a maintainable Next.js design system. Standardized components and interaction patterns across recruiter and ATS workflows, optimized for performance and Core Web Vitals.",
    tags: ["Design System", "Next.js", "Dashboards", "UX"],
  },
  {
    index: "05",
    title: "Hiring Integrations Hub",
    tagline: "One dashboard, many sources",
    description:
      "Led integrations across Naukri.com, Reliance Industries, and ZingHR — automating job distribution and building ingestion pipelines that fetch, normalize, and consolidate external candidate applications into a single unified recruiter dashboard.",
    tags: ["API Integration", "Node.js", "Data Pipelines"],
    metric: "4+ platforms unified",
  },
  {
    index: "06",
    title: "PDF-to-HTML Resume Microservice",
    tagline: "Killed slow client-side rendering",
    description:
      "A microservice that converts resume PDFs to HTML, eliminating slow client-side PDF rendering. Distributed via an Amazon CloudFront CDN to dramatically improve load times and scalability of resume previews.",
    tags: ["Microservice", "AWS CloudFront", "Performance"],
  },
  {
    index: "07",
    title: "AI Recruiter Communications",
    tagline: "Structure from free text",
    description:
      "AI-assisted recruiter workflows: generate outreach emails and reusable templates, and normalize free-text candidate responses into standardized, filterable fields — enabling accurate screening and analytics from messy inputs.",
    tags: ["LLM", "Automation", "Data Normalization"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const marqueeItems = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "LangChain",
  "LangGraph",
  "OpenAI",
  "MCP",
  "AWS",
  "MongoDB",
  "Tailwind CSS",
  "SSR / SSG",
  "Pinecone",
  "Prompt Engineering",
];
