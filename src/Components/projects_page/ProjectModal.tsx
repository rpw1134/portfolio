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
  demoThumbnail?: string;
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
  demoThumbnail,
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

        <div className="p-8 space-y-6">
          <Carousel images={images} />

          <div className="space-y-4">
            <h2 className="font-garamond text-4xl font-light text-white">
              {title}
            </h2>

            <p className="font-lato text-base font-light leading-relaxed text-white/70">
              {description}
            </p>

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

          {demoLink && (
            <div className="space-y-2">
              <h3 className="font-garamond text-xl font-light text-white">
                Demo
              </h3>
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                {demoThumbnail ? (
                  <div className="relative overflow-hidden rounded-lg border border-white/10 hover:border-accent/30 transition-all duration-300">
                    <img
                      src={demoThumbnail}
                      alt="Demo thumbnail"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-all duration-300 flex items-center justify-center">
                      <span className="font-lato text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-secondary/80 px-4 py-2 rounded-full">
                        View Demo
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-full transition-all duration-300">
                    <span className="font-lato text-accent">View Demo</span>
                    <svg
                      className="w-4 h-4 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                )}
              </a>
            </div>
          )}

          <div className="flex flex-wrap gap-4 items-center pt-4 border-t border-white/10">
            {hostedAt && (
              <div className="flex items-center gap-2">
                <span className="font-lato text-sm text-white/50">
                  Hosted at:
                </span>
                <a
                  href={hostedAt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-lato text-sm text-accent hover:text-accent/80 transition-colors duration-300"
                >
                  {new URL(hostedAt).hostname}
                </a>
              </div>
            )}

            {githubLink ? (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/30 rounded-full transition-all duration-300"
              >
                <div className="w-5 h-5 text-white">
                  <GitHubSVG />
                </div>
                <span className="font-lato text-sm text-white">
                  View on GitHub
                </span>
              </a>
            ) : (
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                <div className="w-5 h-5 text-white/40">
                  <GitHubSVG />
                </div>
                <span className="font-lato text-sm text-white/40">
                  This repository is currently private
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
