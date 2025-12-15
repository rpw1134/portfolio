import { ProjectBoxProps } from "./ProjectBox";

// Primary tag can be one of: "ai", "webdev", "data", "mobile", "cloud", "ml"

const projectsData: ProjectBoxProps[] = [
  {
    id: "1",
    title: "AI Research Assistant",
    description:
      "An intelligent research assistant that helps students find and analyze academic papers using natural language processing and machine learning.",
    tags: ["Python", "NLP", "RAG", "LangChain"],
    primaryTag: "ai",
    images: ["/rag_dash.png", "/rag_menu.png", "/Solutions-of-AI-in-DevOps.png"],
    githubLink: "https://github.com/yourusername/ai-research-assistant",
  },
  {
    id: "2",
    title: "Full-Stack E-Commerce Platform",
    description:
      "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    primaryTag: "web",
    images: ["/ryan_green.png", "/ryan_greenremovebg.png"],
    hostedAt: "https://example.com",
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    demoLink: "https://demo.example.com",
  },
  {
    id: "3",
    title: "Data Visualization Dashboard",
    description:
      "An interactive dashboard for visualizing complex datasets with real-time updates and customizable charts for business analytics.",
    tags: ["D3.js", "TypeScript", "MongoDB", "WebSocket"],
    primaryTag: "data",
    images: ["/ryan_puerto_rico.png"],
    githubLink: "https://github.com/yourusername/data-dashboard",
  },
  {
    id: "5",
    title: "Cloud Infrastructure Automation",
    description:
      "Automated deployment pipeline and infrastructure as code solution for managing cloud resources across multiple environments.",
    tags: ["AWS", "Terraform", "Docker", "GitHub Actions"],
    primaryTag: "infrastructure",
    images: ["/rag_dash.png"],
    githubLink: "https://github.com/yourusername/cloud-automation",
  },
];

export default projectsData;
