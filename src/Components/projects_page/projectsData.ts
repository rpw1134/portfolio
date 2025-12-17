import { ProjectBoxProps } from "./ProjectBox";

// Primary tag can be one of: "ai", "webdev", "data", "mobile", "cloud", "ml"

const projectsData: ProjectBoxProps[] = [
  {
    id: "1",
    title: "Application Tracker",
    description:
      "A web application for tracking job applications and managing the job search process.",
    tags: ["React", "TypeScript", "Web Development"],
    primaryTag: "web",
  },
  {
    id: "2",
    title: "Discuss McGill",
    description:
      "A discussion platform for McGill University students to connect and share information.",
    tags: ["React", "Node.js", "Web Development"],
    primaryTag: "web",
  },
  {
    id: "3",
    title: "RAG Pipeline",
    description:
      "A Retrieval-Augmented Generation pipeline for processing and querying documents using AI.",
    tags: ["Python", "RAG", "Data Processing", "AI"],
    primaryTag: "data",
    githubLink: "https://github.com/yourusername/rag-pipeline",
  },
  {
    id: "4",
    title: "MCP Client",
    description:
      "An AI-powered client implementation for Model Context Protocol.",
    tags: ["AI", "Python", "MCP"],
    primaryTag: "ai",
    githubLink: "https://github.com/yourusername/mcp-client",
  },
  {
    id: "5",
    title: "LeetGo",
    description:
      "An AI-assisted LeetCode problem solver and learning tool.",
    tags: ["AI", "Algorithms", "Python"],
    primaryTag: "ai",
  },
  {
    id: "6",
    title: "Web Agent",
    description:
      "An intelligent web automation agent powered by AI.",
    tags: ["AI", "Automation", "Web"],
    primaryTag: "ai",
  },
];

export default projectsData;
