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
  inProgress?: boolean;
  isLive?: boolean;
  onClick?: () => void;
}

export const ProjectBox = ({
  title,
  description,
  tags,
  primaryTag,
  inProgress,
  isLive,
  onClick,
}: ProjectBoxProps) => {
  const BackgroundSVG = projectBackgrounds[primaryTag];

  return (
    <ProjectBoxCard backgroundSVG={BackgroundSVG} onClick={onClick}>
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-garamond text-2xl font-light text-white">
            {title}
          </h3>
          <div className="flex gap-2 flex-shrink-0">
            {inProgress && (
              <span className="px-2 py-1 text-[10px] font-lato font-medium text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 rounded-full whitespace-nowrap">
                IN PROGRESS
              </span>
            )}
            {isLive && (
              <span className="px-2 py-1 text-[10px] font-lato font-medium text-green-400 bg-green-400/10 border border-green-400/30 rounded-full whitespace-nowrap flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                LIVE
              </span>
            )}
          </div>
        </div>
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
