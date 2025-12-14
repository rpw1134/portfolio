import { ProjectBox, ProjectBoxProps } from "./ProjectBox";

const projectsData: ProjectBoxProps[] = [
  {
    id: "1",
    title: "AI Research Assistant",
    description:
      "An intelligent research assistant that helps students find and analyze academic papers using natural language processing and machine learning.",
    tags: ["Python", "NLP", "RAG", "LangChain"],
    primaryTag: "ai",
  },
  {
    id: "2",
    title: "Full-Stack E-Commerce Platform",
    description:
      "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    primaryTag: "webdev",
  },
  {
    id: "3",
    title: "Data Visualization Dashboard",
    description:
      "An interactive dashboard for visualizing complex datasets with real-time updates and customizable charts for business analytics.",
    tags: ["D3.js", "TypeScript", "MongoDB", "WebSocket"],
    primaryTag: "data",
  },
  {
    id: "4",
    title: "Mobile Fitness Tracker",
    description:
      "A cross-platform mobile app that tracks workouts, nutrition, and health metrics with personalized recommendations.",
    tags: ["React Native", "Firebase", "Redux", "HealthKit"],
    primaryTag: "mobile",
  },
  {
    id: "5",
    title: "Cloud Infrastructure Automation",
    description:
      "Automated deployment pipeline and infrastructure as code solution for managing cloud resources across multiple environments.",
    tags: ["AWS", "Terraform", "Docker", "GitHub Actions"],
    primaryTag: "cloud",
  },
  {
    id: "6",
    title: "Machine Learning Model Pipeline",
    description:
      "End-to-end ML pipeline for training, evaluating, and deploying predictive models with automated retraining capabilities.",
    tags: ["TensorFlow", "Python", "MLflow", "Kubernetes"],
    primaryTag: "ml",
  },
];

export const ProjectBoxContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsData.map((project) => (
        <ProjectBox
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          tags={project.tags}
          primaryTag={project.primaryTag}
        />
      ))}
    </div>
  );
};
