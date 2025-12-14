import { useRef, useEffect, useState } from "react";

interface TimelineNodeProps {
  title: string;
  description?: string;
  date: string;
  image?: string;
  isActive: boolean;
}

export const TimelineNode = ({
  title,
  description,
  date,
  image,
  isActive,
}: TimelineNodeProps) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0.3);

  useEffect(() => {
    setOpacity(isActive ? 1 : 0.3);
  }, [isActive]);

  return (
    <div
      ref={nodeRef}
      className="transition-opacity duration-500 ease-in-out"
      style={{ opacity }}
    >
      <div className="bg-secondary/50 rounded-lg p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300">
        {image && (
          <div className="w-full h-48 mb-4 rounded-md overflow-hidden bg-tertiary">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-garamond text-2xl font-semibold text-white">
              {title}
            </h3>
            <span className="text-accent text-sm font-lato whitespace-nowrap mt-1">
              {date}
            </span>
          </div>
          {description && (
            <p className="font-lato text-gray-300 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
