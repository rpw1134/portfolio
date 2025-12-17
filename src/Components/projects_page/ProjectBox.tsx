import { projectBackgrounds } from "./projectBackgrounds";
import { ProjectBoxCard } from "./ProjectBoxCard";

export interface ProjectBoxProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  primaryTag: string;
  images?: string[];
  demoLink?: string;
  demoThumbnail?: string;
  hostedAt?: string;
  githubLink?: string;
  onClick?: () => void;
}

export const ProjectBox = ({
  title,
  description,
  tags,
  primaryTag,
  onClick,
}: ProjectBoxProps) => {
  const BackgroundSVG = projectBackgrounds[primaryTag];

  return (
    <ProjectBoxCard backgroundSVG={BackgroundSVG} onClick={onClick}>
      <div className="space-y-4">
        <h3 className="font-garamond text-2xl font-light text-white">
          {title}
        </h3>
        <p className="font-lato text-base font-light leading-relaxed text-white/70">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-lato text-white/60 bg-white/5 border border-white/10 rounded-full mt-6"
          >
            {tag}
          </span>
        ))}
      </div>
    </ProjectBoxCard>
  );
};
