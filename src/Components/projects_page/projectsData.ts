import { ProjectBoxProps } from "./ProjectBox";

// Primary tag can be one of: "ai", "webdev", "data", "mobile", "cloud", "ml"

const projectsData: ProjectBoxProps[] = [
  {
    id: "1",
    title: "Application Tracker",
    description:
      "A web application for tracking job applications and managing the job search process.",
    tags: ["React.js", "JavaScript", "Spring Boot", "Java", "PostgreSQL"],
    primaryTag: "web",
    isLive: true,
    hostedAt: "https://application-tracker-front.vercel.app",
    images: [
      "../../public/application_tracker/screenshot_1766033217.png",
      "../../public/application_tracker/screenshot_1766033225.png",
    ],
  },
  {
    id: "2",
    title: "Discuss McGill",
    description:
      "A discussion platform for McGill University students to connect and share information.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    primaryTag: "web",
  },
  {
    id: "3",
    title: "RAG Pipeline",
    description:
      "A Retrieval-Augmented Generation pipeline for processing and querying documents using AI.",
    tags: [
      "FastAPI",
      "Python",
      "Next.js",
      "TypeScript",
      "Hugging Face",
      "ChromaDB",
      "LLM Integration",
    ],
    primaryTag: "data",
    githubLink: "https://github.com/rpw1134/rag-pipeline",
    demoLink: "https://www.loom.com/share/d081bb33fd954c3092c7503c7fbe3b14",
    images: [
      "../../public/rag_menu.png",
      "../../public/rag_pipeline/screenshot_1766032039.png",
      "../../public/rag_pipeline/screenshot_1766032058.png",
      "../../public/rag_pipeline/screenshot_1766032087.png",
    ],
  },
  {
    id: "4",
    title: "MCP Client",
    description:
      "An AI-powered client implementation for Model Context Protocol.",
    tags: ["FastAPI", "Python", "ChromaDB", "LLM Integration"],
    primaryTag: "ai",
    githubLink: "https://github.com/rpw1134/mcp-client-from-scratch",
  },
  {
    id: "5",
    title: "LeetGo",
    description: "An AI-assisted LeetCode problem solver and learning tool.",
    tags: [
      "React.js",
      "TypeScript",
      "Spring Boot",
      "Java",
      "Supabase",
      "Docker",
      "LLM Integration",
    ],
    primaryTag: "ai",
  },
  {
    id: "6",
    title: "Web Agent",
    description: "An intelligent web automation agent powered by AI.",
    tags: ["FastAPI", "Python", "Playwright", "LLM Integration"],
    primaryTag: "ai",
    inProgress: true,
    githubLink: "https://github.com/rpw1134/web-automation-agent",
  },
  {
    id: "7",
    title: "Lauma",
    description:
      "A real-time collaborative discussion environment with natural AI integration.",
    tags: [
      "Next.js",
      "Supabase",
      "Express.js",
      "TypeScript",
      "ChromaDB",
      "LLM Integration",
    ],
    primaryTag: "web",
    demoLink: "https://www.loom.com/share/595a7801f5c74690847d5101e59dae8e",
  },
];

export default projectsData;
