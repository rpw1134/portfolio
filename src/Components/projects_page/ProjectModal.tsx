import { useEffect } from "react";
import { Carousel } from "./Carousel";
import GitHubSVG from "../svgs/GitHub";

export interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  tags: string[];
  images?: string[];
  demoLink?: string;
  hostedAt?: string;
  githubLink?: string;
}

export const ProjectModal = ({
  isOpen,
  onClose,
  title,
  description,
  tags,
  images,
  demoLink,
  hostedAt,
  githubLink,
}: ProjectModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-primary/80 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl max-h-[90vh] bg-secondary rounded-lg border border-white/10 shadow-2xl overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-secondary/80 hover:bg-secondary text-white p-2 rounded-full transition-all duration-300 border border-white/10 hover:border-accent/30"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div>
          {/* Carousel Section */}
          <div className="bg-primary/30 p-6 border-b border-white/5">
            <Carousel images={images} />
          </div>

          {/* Content Section */}
          <div className="p-8 space-y-6">
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <h2 className="font-garamond text-4xl font-light text-white">
                  {title}
                </h2>
                {githubLink ? (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-8 h-8 text-white/60 hover:text-accent transition-colors duration-300 flex items-center justify-center"
                    aria-label="View on GitHub"
                  >
                    <GitHubSVG />
                  </a>
                ) : (
                  <div
                    className="flex-shrink-0 w-8 h-8 text-white/20 cursor-not-allowed flex items-center justify-center"
                    title="This repository is currently private"
                  >
                    <GitHubSVG />
                  </div>
                )}

                {hostedAt && (
                  <a
                    href={hostedAt}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-8 h-8 text-white/60 hover:text-accent transition-colors duration-300 flex items-center justify-center"
                    aria-label="Open hosted site"
                    title="Open hosted site"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path d="M10.5 13.5 13.5 10.5" />
                      <path d="M9 16H7a4 4 0 0 1 0-8h3" />
                      <path d="M15 8h2a4 4 0 0 1 0 8h-3" />
                    </svg>
                  </a>
                )}

                {demoLink && (
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 px-3 h-8 text-sm font-lato text-white/70 hover:text-white border border-white/20 hover:border-accent/50 rounded-full transition-all duration-300 flex items-center justify-center"
                    aria-label="View demo"
                    title="View demo"
                  >
                    Demo
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-lato text-white/60 bg-white/5 border border-white/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="font-lato text-base font-light leading-relaxed text-white/70">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
