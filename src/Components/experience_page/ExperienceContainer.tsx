import { RefObject } from "react";
import { Timeline } from "./Timeline";
import { experienceData } from "./experienceData";

interface ExperienceContainerProps {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
}

export const ExperienceContainer = ({
  scrollContainerRef,
}: ExperienceContainerProps) => {
  return (
    <div className="w-full">
      <Timeline
        experiences={experienceData}
        scrollContainerRef={scrollContainerRef}
      />
    </div>
  );
};
