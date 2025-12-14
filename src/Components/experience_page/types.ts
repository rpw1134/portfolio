export interface ExperienceNode {
  id: string;
  type: "major" | "minor";
  title: string;
  description?: string;
  date: string;
  image?: string;
}
