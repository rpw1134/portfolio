import { useEffect, useState } from "react";

interface TimelineMinorNodeProps {
  title: string;
  date: string;
  isActive: boolean;
}

export const TimelineMinorNode = ({
  title,
  date,
  isActive,
}: TimelineMinorNodeProps) => {
  const [opacity, setOpacity] = useState(0.3);

  useEffect(() => {
    setOpacity(isActive ? 1 : 0.3);
  }, [isActive]);

  return (
    <div
      className="transition-opacity duration-500 ease-in-out"
      style={{ opacity }}
    >
      <div className="bg-tertiary/50 rounded-md p-4 border border-accent/10 hover:border-accent/30 transition-all duration-300">
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-garamond text-lg font-medium text-white">
            {title}
          </h4>
          <span className="text-accent text-xs font-lato whitespace-nowrap mt-1">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};
